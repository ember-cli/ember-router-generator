Router.map(function() {
  this.route('bar', function() {
    this.route('index', { path: 'main' });
  });
});
