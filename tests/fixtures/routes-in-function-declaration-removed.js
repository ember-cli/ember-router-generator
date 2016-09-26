function fooRoutes() {
  this.route('step1');
  this.route('step2');
  this.route('step3');
}

Router.map(function() {
  this.route('foo', function() {
    this.route('new', { path: '/foo/create' }, fooRoutes);
    this.route('edit', { path: '/foo/:id/edit' }, fooRoutes);
  });
});
