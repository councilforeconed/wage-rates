/* global App */

export default Ember.Controller.extend({

  worker: App.Worker,

  hasTakenMathTest: function () {
    return this.get('worker.mathTestPoints') !== null;
  }.property('worker.mathTestPoints')

});
