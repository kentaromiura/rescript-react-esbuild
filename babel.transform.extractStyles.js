var ecss = require('@emotion/css')
var fs = require('fs')

module.exports = function (babel) {
    const { types: t } = babel;
    
    return {
      name: "extract-css", // not required
      visitor: {
        CallExpression(path) {  
          if(path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'css' && path.node.callee.object.name == 'Html')
          {
            let content = [];
            let Html= {css: (a, b) => ecss.css(a,...b)};            
            // yes eval lol, easiest way to do this.
            let res = eval(path.toString())
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
  