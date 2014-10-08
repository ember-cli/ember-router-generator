var RouteRemap = require('../index.js');
var assert = require('assert');
var fs = require('fs');
var astEquality = require('esprima-ast-equality');
var escodegen = require('escodegen');
var expect = require('chai').expect;


describe('', function {
  it('adds resource without children', function() {
    var routes = './tests/fixtures/basic-route.js';

    var routesRemap = new RouteRemap(routes, {path: 'foos', type: 'resource', addChildRoutes: true});

    astEquality(escodegen.generate(routesRemap.ast), fs.readFileSync('./tests/fixtures/resource-foos.js'));
  });

  it('adds routes', function() {
    var routes = './tests/fixtures/basic-route.js';

    var routesRemap = new RouteRemap(routes, {path: 'bar', type: 'route'});

    astEquality(escodegen.generate(routesRemap.ast), fs.readFileSync('./tests/fixtures/route-bar.js'));
  });

  it('add nested routes', function() {
    var routes = './tests/fixtures/resource-foos.js';

    var routesRemap = new RouteRemap(routes, {path: 'foos/bar', type: 'route'});

    astEquality(escodegen.generate(routesRemap.ast), fs.readFileSync('./tests/fixtures/route-with-resource.js'));
  });
});
