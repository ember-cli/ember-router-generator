class AppRouter extends Router {
  @someDecorator location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('foos');
});
