const Quizzes = require ('../model/quiz')

const getQuizzes = async function (req, res) {
  try {
    const quizList = await Quizzes.find();
    res.json(quizList);
    res.status(200);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const getOneQuiz = async function (req, res) {
  try {
    console.log('req params', req.params)
    const quiz = await Quizzes.findById(req.params.id);
    res.json(quiz);
    res.status(200);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const postQuiz = async function (req, res) {
  try {
    const newQuiz = {
      name: req.body.name,
      tags: req.body.tags,
      questions: req.body.questions
    }
    const quiz = await Quizzes.create(newQuiz);
    res.json(quiz);
    res.status(204);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const updateQuiz = async function (req, res) {
  try {
    const newQuiz = {
      name: req.body.name,
      tags: req.body.tags,
    }
    const quiz = await Quizzes.findByIdAndUpdate(req.body.quizId, newQuiz);
    res.json(quiz);
    res.status(204);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const postQuestion = async function (req, res) {
  console.log('req',req.body);
  try {
    const quiz = await Quizzes.findById(req.body.quizId).exec();
    const answerOptions = [];
    req.body.question.answerOptions.forEach((el) => {
      answerOptions.push(el);
    })
    console.log('answerOptions', answerOptions);
    const question = {
      questionType: req.body.question.questionType,
      question: req.body.question.question,
      points: req.body.question.points,
      answerOptions: answerOptions,
      correctAnswer: req.body.question.correctAnswer,
      tags: req.body.question.tags,
      time: req.body.question.time,
    }
    console.log('question',question)
    await quiz.questions.push(question);
    const updated = await quiz.save();
    res.json(updated);
    res.status(204);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

module.exports = {
  getQuizzes,
  getOneQuiz,
  postQuiz,
  updateQuiz,
  postQuestion
}