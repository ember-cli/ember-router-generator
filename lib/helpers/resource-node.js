var routeOptionsNode = require('./route-options-node');

function emptyFunction() {
  return {
    "type": "FunctionExpression",
    "id": null,
    "params": [],
    "defaults": [],
    "body": {
      "type": "BlockStatement",
      "body": []
    },
    "rest": null,
    "generator": false,
    "expression": false
  };
}

module.exports = function resourceNode(name, options) {
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
          "name": "resource"
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

  node.expression.arguments.push(emptyFunction());

  return node;
};
