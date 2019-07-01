module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['mocha', 'node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  globals: {},
  rules: {
    /*** For compatibility with existing source */
    'no-var': 0,
    'no-undef': 0,
    'strict': 0,
    'object-shorthand': 0,
    'no-lonely-if': 0,

    /*** Possible Errors ***/

    'no-console': 0,
    'no-template-curly-in-string': 2,
    'no-unsafe-negation': 2,

    /*** Best Practices ***/

    curly: 2,
    eqeqeq: 2,
    'guard-for-in': 0,
    'no-caller': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-new': 0,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'wrap-iife': 0,
    yoda: 2,

    /*** Variables ***/

    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],

    /*** Stylistic Issues ***/

    camelcase: 2,
    'new-cap': [2, { properties: false }],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-plusplus': 0,
    'no-unneeded-ternary': 2,

    /*** ECMAScript 6 ***/

    'no-useless-computed-key': 2,
    'prefer-template': 2,
    'symbol-description': 2,
  },
};