import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'This field is required'],
        match: [/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Invalid Email Address']
    },
    userName: {
        type: String,
        required: [true, 'This field is required']
    },
    photo: {
        type: String,
    }
})

const User = mongoose.models.User ||  mongoose.model('User', userSchema)

export default User