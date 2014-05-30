export default Ember.Handlebars.makeBoundHelper(function(number) {
  var unit = "Skill Points";
  if (number === 1) unit = "Skill Points";
  return "%@ %@".fmt(number, unit);
});
