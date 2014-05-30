export default Ember.Handlebars.makeBoundHelper(function(number) {
  var unit = "questions";
  if (number === 1) unit = "question";
  return "%@ %@".fmt(number, unit);
});
