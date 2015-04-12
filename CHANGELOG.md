# ember-router-generator Changelog

### 0.4.0

Adds special handling for index routes. When running `ember g route
foo/index` the generated route will be `this.route('foo', function()
{})`.

If there is a route like `this.route('foo', function() {})` running
`ember d route foo/index` will modify it to `this.route('foo');` since we
are just removing the index.

For more info see [#10](https://github.com/ember-cli/ember-router-generator/pull/10).
