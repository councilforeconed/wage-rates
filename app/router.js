var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('firm', { path: 'firm/:type' });
  this.route('chart', { path: 'firm/:type/hiring-chart' });
  this.resource('worker', function () {
    this.route('math-test');
    this.route('hand-eye');
    this.route('resume');
  });
});

export default Router;
