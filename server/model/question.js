const mongoose = require('./index.js');
const AnswerOptions = require('./answerOption.js');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  questionType: {type: String, required: true},
  question: {type: String, required: true},
  points: {type: Number},
  answerOptions: [AnswerOptions],
  correctAnswer: {type: Number},
  tags: {type: String},
  time: {type: Number}
});

module.exports = mongoose.model('Questions', QuestionSchema);