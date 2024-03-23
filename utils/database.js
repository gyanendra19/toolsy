import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async() => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('connected')
        return
    }

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'toolsy',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log('Database is Connected');
    }catch(error){
        console.log(error);
    }
}