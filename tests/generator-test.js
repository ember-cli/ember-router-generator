var EmberRouterGenerator = require('../index.js');
var assert = require('assert');
var fs = require('fs');
var astEquality = require('esprima-ast-equality');
var escodegen = require('escodegen');
var expect = require('chai').expect;


describe('Ember Route Generator', function() {
  it('adds resource', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos', {type: 'resource'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('adds routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');

    var routes = new EmberRouterGenerator(source);
    var newRoutes = routes.add('bar');

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/bar-route.js'));
  });

  it('leaves untouched existing resources', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos', {type: 'resource'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/foos-resource.js'));
  });

  it('leaves untouched existing routes', function() {
    var source = fs.readFileSync('./tests/fixtures/bar-route.js');

    var routes = new EmberRouterGenerator(source);
    var newRoutes = routes.add('bar');

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/bar-route.js'));
  });

  it('add nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar', {type: 'route'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/foos-bar-route.js'));
  });

  it('add nested routes in existing nested route', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-bar-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar/baz', {type: 'route'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/foos-bar-baz-route.js'));
  });

  it('add nested resources', function() {
    var source = fs.readFileSync('./tests/fixtures/foos-resource.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('foos/bar', {type: 'resource'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/foos-bars-route.js'));
  });

  it('supports nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('bar/baz', {type: 'route'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/bar-baz-route.js'));
  });

  it('supports deeply nested routes', function() {
    var source = fs.readFileSync('./tests/fixtures/basic-route.js');
    var routes = new EmberRouterGenerator(source);

    var newRoutes = routes.add('bar/baz/foo', {type: 'route'});

    astEquality(escodegen.generate(newRoutes.ast), fs.readFileSync('./tests/fixtures/bar-baz-foo-route.js'));
  });
});
