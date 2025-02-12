var ecss = require('@emotion/css')
var fs = require('fs')

let unique = 0;

module.exports = function (babel) {
    const { types: t, template } = babel;
    return {
      name: "extract-css", // not required
      visitor: {
        CallExpression(path) {  
          if(path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'css' && path.node.callee.object.name == 'Html')
          {
            let content = [];
            let originalCode = [];
            let units = [];
            let uniqueId = unique++;
            let Html= {
              css: (a, b) => {
                if(b.length) {
                  let res  = [a[0]];
                  b.forEach((b, i) => {
                    res.push(b);
                    if (a[i+1].indexOf(';') != -1) {
                      res.push(a[i+1].substring(a[i+1].indexOf(';')));
                      units.push(a[i+1].substring(0,a[i+1].indexOf(';')));
                    } else {
                      units.push(a[i+1]);
                    }
                  })                  
                  return ecss.css(res.join(''),...[])
                } 
                return ecss.css(a,...b)
              }
            };
            
            // yes eval lol, easiest way to do this (turns out if one wants variable eval is not enough).            
            let res;
            if (path.node.arguments[1].elements.length === 0) {
              res = eval(path.toString())
            } else {
              path.node.arguments[1].elements = (path.node.arguments[1].elements.map((e,i) => {
                originalCode[i] = e;
                return t.StringLiteral(`var(--kentacss${uniqueId}-${i})`)
              }));
              res = eval(path.toString())
            }

            let oe = path.findParent((path) => {              
              return path.isObjectExpression();
            }
            );

            let hasStyle = x => {
            	return x.some(x=> x.key.name === 'style')
            }
            if (oe && hasStyle(oe.node.properties)) {
              let style = oe.node.properties.find(x=> x.key.name === 'style')
              originalCode.forEach((oc, i) => {
                style.value.properties.push( 
                  t.ObjectProperty(t.StringLiteral(`--kentacss${uniqueId}-${i}`), 
                  units[i] ? t.TemplateLiteral([t.templateElement({raw:""}), t.templateElement({raw:units[i] || ''})], [oc]): oc)
                )
              })              
            } else if (oe) {
              oe.node.properties.push(
                t.ObjectProperty(
                  t.StringLiteral('style'),
                  t.ObjectExpression(
                    originalCode.map((oc, i) =>
                      t.ObjectProperty(
                        t.StringLiteral(`--kentacss${uniqueId}-${i}`), 
                        units[i] ? 
                        t.TemplateLiteral([t.templateElement({raw:""}), t.templateElement({raw:units[i] || ''})], [oc])
                        : oc
                      )
                    )
                  )
                )
              )
            } else {              
              let p = path.findParent(
                (path) => path.parentPath.node.body
              )
              originalCode.map((oc, i) => {

                let statement = template.expression`
                ((body, name, value) => {
                  if (body) {body.style.setProperty(name, value)}
                  document.addEventListener('DOMContentLoaded', () => {document.body.style.setProperty(name,value)})
                })(document.body, NAME, ORIGINAL_NODE)`({
                  ORIGINAL_NODE:units[i] ?  t.TemplateLiteral([t.templateElement({raw:""}), t.templateElement({raw:units[i] || ''})], [oc]): oc,
                  NAME: `"--kentacss${uniqueId}-${i}"`
                });
              	 
	              if (["FunctionDeclaration", "BlockStatement"].includes(p.parentPath.node.type)) {
                  p.parentPath.unshiftContainer('body',statement)
                } else {
				          p.parentPath.pushContainer('body',statement)
                }
              }
              );
              
             
            }

            Object.keys(ecss.cache.inserted).forEach(c => {              
                content.push(ecss.cache.inserted[c]);
            })
            
            path.replaceWith(t.StringLiteral(res))

            // unfortunately we write this file many times...
            fs.writeFileSync('out.css', content.join('\n'), 'utf-8')    
          }
        }
      }
    };
  }
  