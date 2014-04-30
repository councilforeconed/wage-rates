import Employee from 'wagerates/models/employee';

export default Ember.ArrayController.extend({
  
  dollarAmountPerPoint: 8,
  
  totalSkillPoints: function () {
    return this.reduce(function (sum, employee) {
      if (employee.get('skillPoints')) {
        return sum + parseInt(employee.get('skillPoints'), 10);
      } else {
        return sum;
      }
    }, 0);
  }.property('@each.skillPoints'),
  
  totalWages: function () {
    return this.reduce(function (sum, employee) {
      if (employee.get('wage')) {
        return sum + parseInt(employee.get('wage'), 10);
      } else {
        return sum;
      }
    }, 0);
  }.property('@each.wage'),
  
  valueProduced: function () {
    return this.get('totalSkillPoints') * this.get('dollarAmountPerPoint');
  }.property('totalSkillPoints', 'dollarAmountPerPoint'),
  
  profit: function () {
    return this.get('valueProduced') - this.get('totalWages');
  }.property('valueProduced', 'totalWages'),
  
  actions: {
    addEmployee: function () {
      this.get('content').pushObject(Employee.create());
    }
  }
  
});