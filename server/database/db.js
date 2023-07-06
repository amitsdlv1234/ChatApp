
import mongoose from "mongoose";
import  dotenv from 'dotenv';

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const Connection=async()=>{
    const URL=`mongodb+srv://${username}:${password}@whatsapp.ehgtoxa.mongodb.net/`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true})
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while Connecting Databse',error);
    }
}

export default Connection;