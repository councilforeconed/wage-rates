/* global App */

export default Ember.Controller.extend({
  
  worker: App.Worker,
  
  isResumeViewable: function () {
    return this.get('worker.mathTestPoints') !== null && this.get('worker.handEyeTestPoints') !== null;
  }.property('worker.mathTestPoints', 'worker.handEyeTestPoints')
  
});