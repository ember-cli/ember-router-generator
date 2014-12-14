module.exports = function resourceNode(name) {
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
          "name": "resource"
        }
      },
      "arguments": [
        {
          "type": "Literal",
          "value": name,
        },
        {
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
        }
      ]
    }
  };
};
