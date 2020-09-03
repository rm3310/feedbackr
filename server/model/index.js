const mongoose = require('mongoose');

const URI = `mongodb+srv://adminUser:${process.env.MONGODB_PASSWORD}@feedbackrcluster.u9tjq.mongodb.net/feedbackr?retryWrites=true&w=majority`
// dbname feedbackr?

// const connectDB = async () => {
// await  
mongoose.connect(URI , //'mongodb://localhost:27017/quiz_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  // console.log('db connected');
// }

module.exports = mongoose;
// module.exports = connectDB;