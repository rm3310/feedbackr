// require model

// add async
const getQuestions = function (req, res) {
  try {
    console.log(req.body);
    res.send("getting questions");
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

const postQuestion = function (req, res) {
  try {
    console.log(req.body);
    res.send("posting question");
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.status(500);
    res.json(error);
  }
}

module.exports = {
  getQuestions,
  postQuestion
}