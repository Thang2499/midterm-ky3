import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
        unique:true
    } ,
    password:{
        type:String,
        required:true
    },
    userName: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        default: null
    }
}, { collection: 'users' });
 const UsersModel = mongoose.model("users", userSchema);
 export default UsersModel;