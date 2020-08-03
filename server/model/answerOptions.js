const mongoose = require('./index.js');

const Schema = mongoose.Schema;

const AnswerOptionSchema = new Schema({
  value: {type: Number, required: true},
  label: {type: String, required: true},
});

module.exports = mongoose.model('AnswerOptions', AnswerOptionSchema);