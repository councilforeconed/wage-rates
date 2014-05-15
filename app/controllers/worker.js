/* global App */

export default Ember.Controller.extend({
  
  worker: App.Worker,
  
  isResumeViewable: function () {
    return this.get('worker.mathTestPoints') && this.get('worker.handEyeTestPoints');
  }.property('worker.mathTestPoints', 'worker.handEyeTestPoints')
  
});