export default {
  name: "loadQuestions",
  initialize: function(container) {
    var quiz = [
      { question: "75 &times; 23", answer: "1725" },
      { question: "91 &times; 5", answer: "455" },
      { question: "987 &times; 5", answer: "4935" },
      { question: "83 &times; 6", answer: "498" },
      { question: "867 + 32", answer: "899" },
      { question: "5688 + 9", answer: "5697" },
      { question: "4545 - 222", answer: "4323" },
      { question: "77 - 66", answer: "11" },
      { question: "8209 - 77", answer: "8132" },
      { question: "3400 &times; 4", answer: "13600" }
    ];
    App.MathQuestions = quiz;
  }
};