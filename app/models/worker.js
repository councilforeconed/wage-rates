/* global sessionStorage */

export default Ember.Object.extend({

  name: null,
  handEyeTestPoints: null,
  mathTestPoints: null,

  pullFromSessionStorage: function () {
    var worker = JSON.parse(sessionStorage.getItem('worker'));
    this.setProperties(worker);
  }.on('init'),

  storeInSessionStorage: function () {
    var worker = this.getProperties('name', 'handEyeTestPoints', 'mathTestPoints');
    sessionStorage.setItem('worker', JSON.stringify(worker));
  }.observes('name', 'handEyeTestPoints', 'mathTestPoints')

});
