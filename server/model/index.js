const mongoose = require('mongoose');

const URI = `mongodb+srv://adminUser:${process.env.MONGODB_PASSWORD}@feedbackrcluster.u9tjq.mongodb.net/feedbackr?retryWrites=true&w=majority`

// FOR LOCAL TESTING
// mongoose.connect('mongodb://localhost:27017/quiz_db',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

// mongoose.connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });
// // // //

// CONNECTION TO MONGODB ATLAS
mongoose.connect(URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);
// 
// mongoose.connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });
// // // //

module.exports = mongoose;
