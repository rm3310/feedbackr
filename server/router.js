const router = require('express').Router();
const quizController = require('./controller/quiz');

// routing for questions
router.post('/questions', quizController.postQuestion);

// routing for quizzes
router.get('/quizzes', quizController.getQuizzes);
router.post('/quizzes', quizController.postQuiz);

router.get('/quiz/:id', quizController.getOneQuiz);

// quiz updates
router.post('/quiz-update', quizController.updateQuiz);

module.exports = router;