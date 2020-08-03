const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  questionType: {type: String, required: true},
  question: {type: String, required: true},
  points: {type: Number},
  answerOptions: [{
    value: {type: Number, required: true},
    label: {type: String, required: true},
  }],
  correctAnswer: {type: Number},
  tags: {type: String},
  time: {type: Number}
});

module.exports = mongoose.model('Questions', QuestionSchema);