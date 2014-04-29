export default Ember.Object.extend({
  
  question: null,
  answer: null,
  submittedAnswer: null,

  userAnswer: function () {
    var formatted = numeral(this.get('submittedAnswer')).format('0')
    if (parseInt(formatted, 10)) return formatted;
  }.property('submittedAnswer'),
  
  correct: function () {
    return this.get('answer') === this.get('userAnswer');
  }.property('answer', 'userAnswer')
  
});