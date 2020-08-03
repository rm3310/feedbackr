// require model
const 

// add async
const getQuizzes = function (req, res) {
  try {
    const quizList = 
    console.log(req.body);
    res.send("getting quizzes");
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const postQuiz = function (req, res) {
  try {
    console.log(req.body);
    res.send("posting quiz");
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

module.exports = {
  getQuizzes,
  postQuiz
}