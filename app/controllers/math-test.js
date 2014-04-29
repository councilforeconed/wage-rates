/* global App */

export default Ember.ArrayController.extend({
  
  worker: App.Worker,
  
  correct: function () {
    var correct = this.filterBy('correct', true).get('length');
    this.get('worker').set('mathTestPoints', correct);
    return correct;
  }.property('@each.userAnswer'),
  
  secondsRemaining: 10,
  testActive: false,
  testStarted: false,
  countdown: null,
  
  stopCountdownAtZero: function () {
    if (!this.get('secondsRemaining')) {
      clearInterval(this.get('countdown'));
      this.set('testOver', true);
      this.set('testActive', false);
      console.log('The test is over.');
    }
  }.observes('secondsRemaining'),
  
  actions: {
    activateTest: function () {
      var self = this;
      this.set('testActive', true);
      this.set('testStarted', true);
      this.set('countdown', setInterval(function () {
        self.decrementProperty('secondsRemaining');
        console.log(self.get('secondsRemaining'));
      },1000));
    }
  }
  
});