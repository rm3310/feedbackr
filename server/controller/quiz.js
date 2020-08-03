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

const postQuestion = async function (req, res) {
  try {
    const quiz = await Quizzes.findById(req.body.quizId).exec();
    await quiz.questions.push(req.body.question);
    await quiz.save();
    res.json(quiz);
    res.status(204);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

module.exports = {
  getQuizzes,
  postQuiz,
  postQuestion
}