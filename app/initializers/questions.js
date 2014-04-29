/* global App */

import Question from 'wagerates/models/math-question';

export default {
  name: "loadQuestions",
  initialize: function(container) {
    var quiz = [
      Question.create({ question: "75 &times; 23", answer: "1725" }),
      Question.create({ question: "91 &times; 5", answer: "455" }),
      Question.create({ question: "987 &times; 5", answer: "4935" }),
      Question.create({ question: "83 &times; 6", answer: "498" }),
      Question.create({ question: "867 + 32", answer: "899" }),
      Question.create({ question: "5688 + 9", answer: "5697" }),
      Question.create({ question: "4545 - 222", answer: "4323" }),
      Question.create({ question: "77 - 66", answer: "11" }),
      Question.create({ question: "8209 - 77", answer: "8132" }),
      Question.create({ question: "3400 &times; 4", answer: "13600" })
    ];
    if (App) App.MathQuestions = quiz;
  }
};