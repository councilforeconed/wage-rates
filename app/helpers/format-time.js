export default Ember.Handlebars.makeBoundHelper(function(number) {
  var minutes = Math.floor(number / 60);
  var seconds = number % 60;

  var minuteUnit = "minutes";
  var secondUnit = "seconds";

  if (minutes === 1) minuteUnit = "minute";
  if (seconds === 1) secondUnit = "second";

  return "%@ %@ and %@ %@".fmt(minutes, minuteUnit, seconds, secondUnit);
});
