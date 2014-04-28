export default Ember.Route.extend({
  
  model: function (params) {
    
    var type = params.type;
    
    var instructions = {
      accounting: ["You run a top accounting firm that is in need of additional workers. Tax season is rapidly approaching and your staff simply cannot handle the volume of work that your company has taken on in the last three months. Any workers you hire must be highly proficient at solving basic mathematical problems. You are looking for workers who can solve problems quickly and accurately. The more problems they can solve, the more money they can potentially earn for your firm.", "Each worker will be required to take your Basic Math Skills test as a prerequisite to being hired. The three of you, along with the three employer representatives from the construction company, will conduct, monitor and score the tests of each worker. All tests will be conducted simultaneously. The teacher will read test instructions (Activity 13.4) to the workers prior to starting them beginning the testing process."],
      construction: ["You run a construction company that needs additional workers. Any workers you hire must have good hand/eye coordination in order to do the job effectively. You are looking for workers who can quickly move materials from Point A to Point B. The more materials a worker can move, the higher profit they earn for your company.", "Each worker will be required to take your Hand/Eye Coordination test as a prerequisite to being hired. The three of you, along with the three employer representatives from the accounting firm, will conduct, monitor and score the tests of each worker. Testing will be conducted by the six employer representatives simultaneously. The teacher will read the Hand/Eye Coordination test instructions (Activity 13.5) to the workers prior to them starting the testing process."]
    };
    
    var skills = {
      accounting: "mathematical",
      construction: "hand/eye"
    };
    
    return {
      type: type,
      instructions: instructions[type],
      skills: skills[type]
    };
  }
  
});