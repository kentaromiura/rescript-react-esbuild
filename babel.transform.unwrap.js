module.exports = function (babel) {
  const { types: t } = babel;
  
  return {
    name: "unwrap-tagged-args",
    visitor: {
      CallExpression(path) {        
        if (path.node.arguments.length === 2 &&
            path.node.arguments[0].type === 'ArrayExpression' &&
            path.node.arguments[1].type === 'ArrayExpression'
        ){
          if (path.node.arguments[1].elements.every(e=>e.type === 'ObjectExpression' && e.properties[0].key.name==='NAME' && e.properties[1].key.name==='VAL') )
          {
          let unwrap = path.node.arguments[1].elements.map(e => e.properties[1].value);
          path.node.arguments[1].elements = unwrap;}
        }          
      }
    }
  };
} 