import Employee from 'wagerates/models/employee';

export default Ember.Route.extend({
  
  model: function () {
    return [
      Employee.create(),
      Employee.create(),
      Employee.create(),
    ];
  }
  
});