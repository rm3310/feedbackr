const mongoose = require('./index.js');
const Question = require('./question.js');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: {type: String, required: true},
  tags: {type: String},
  questions: [Question]
});

module.exports = mongoose.model('Events', EventSchema);