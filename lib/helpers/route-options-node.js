module.exports = function routeOptionNode(options) {
  options = options || {};

  var node = {
    "type": "ObjectExpression",
    "properties": [ ]
  };

  if (options.path) {
    node.properties.push({
      "type": "Property",
      "key": {
        "type": "Identifier",
        "name": "path"
      },
      "value": {
        "type": "Literal",
        "value": options.path
      },
      "kind": "init"
    });
  }

  return node;
};
