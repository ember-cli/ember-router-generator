function EqualityError(message, actual, expected) {
  this.message = message;
  this.actual = actual;
  this.expected = expected;
  this.showDiff = true;
  Error.captureStackTrace(this, module.exports);
}

EqualityError.prototype = Object.create(Error.prototype);
EqualityError.prototype.name = 'EqualityError';
EqualityError.prototype.constructor = EqualityError;

var recast = require('recast');
var parser = require('recast/parsers/babel');
var traverse = require('@babel/traverse').default;

module.exports = function(actual, expected, message) {
  var parsedActual   = recast.parse(actual.toString(), { parser });
  var parsedExpected = recast.parse(expected.toString(), { parser });

  // Removes source-specific metadata from AST nodes
  stripSourceInfo(parsedActual, parsedExpected);

  var seemEqual = JSON.stringify(parsedActual) === JSON.stringify(parsedExpected);

  if (!seemEqual) {
    throw new EqualityError(message || "AST equality failed",
      recast.print(parsedActual).code,
      recast.print(parsedExpected).code
    );
  }
};

function stripSourceInfo(ast1, ast2) {
  const stripNode = node => {
    delete node.tokens;
    delete node.loc;
    delete node.start;
    delete node.end;
  }

  traverse.cheap(ast1, stripNode);
  traverse.cheap(ast2, stripNode);
}
