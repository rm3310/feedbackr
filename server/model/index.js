const Sequalize = require('sequalize');

const sequalize = new Sequalize ('feedbackr','admin','admin', {
  host: 'localhost',
  dialect: 'postgres'
})

sequalize
 .authenticate()
 .then(()=>{
   console.log('db connected')
 })
 .catch((error)=>{
   console.log('unable to connect to db',error)
 })