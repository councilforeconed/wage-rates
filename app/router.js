var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('firms', { path: 'firm/:type' });
  this.route('chart', { path: 'firm/:type/hiring-chart' });
  this.route('worker');
  this.route('math-test', { path: 'worker/math' });
  this.route('hand-eye-test', { path: 'worker/hand-eye' });
  this.route('resume', { path: 'worker/resume' });
});

export default Router;
