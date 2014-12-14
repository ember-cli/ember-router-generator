module.exports = function routeNode(name) {
  return {
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
};
