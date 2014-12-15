var routeOptionsNode = require('./route-options-node');

module.exports = function routeNode(name, options) {
  options = options || {};

  var node = {
    "type": "ExpressionStatement",
    "expression": {
      "type": "CallExpression",
      "callee": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "ThisExpression"
        },
        "property": {
          "type": "Identifier",
          "name": "route"
        }
      },
      "arguments": [
        {
          "type": "Literal",
          "value": name
        }
      ]
    }
  };

  if (options.path) {
    node.expression.arguments.push(routeOptionsNode(options));
  }

  return node;
};
