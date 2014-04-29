/* global App */

export default Ember.Route.extend({
  
  model: function () {
    return App.MathQuestions;
  }
  
});