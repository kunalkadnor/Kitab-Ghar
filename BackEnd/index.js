import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config();
const port = process.env.port || 4000

const mongoDBURL=process.env.mongoDBURL;

// For connection MongoDb
try{

  mongoose.connect(mongoDBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log('connect to mongoDB')

}catch(err){
  console.log('ERROR ',err)
}


// Defining Route

app.use('/book',bookRoute);
app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})