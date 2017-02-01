Router.map(function() {
  this.route('bar');
  this.route('foos', function() {
    this.route('bar');
    this.route('bar');
  });
});
