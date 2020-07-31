const router = require('express').Router();
const quizController = require('./controller/quiz');
const questionController = require('./controller/question');

// routing for questions
router.get('/questions', questionController.getQuestions);
router.post('/questions', questionController.postQuestion);

// routing for quizzes
router.get('/quizzes', quizController.getQuizzes);
router.post('/quizzes', quizController.postQuiz);

module.exports = router;