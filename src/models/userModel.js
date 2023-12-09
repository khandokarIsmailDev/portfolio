// import mongoose from "mongoose";
// import {Schema} from "mongoose";
//
// const userSchema = new Schema({
//     userName:{
//         type: String,
//         required:[true,"Please Provide a userName"],
//         unique:true
//     },
//     email:{
//         type:String,
//         required:[true,"Please Provide a email"],
//         unique:true
//     },
//     password:{
//         type:String,
//         required:[true,"Please Provide a Password"]
//     },
//     isVerified:{
//         type: Boolean,
//         default:false
//     },
//     isAdmin:{
//         type:Boolean,
//         default: false
//     },
//     forgetPasswordToken:String,
//     forgetPasswordTokenExpiry:Date,
//     verifyToken:String,
//     verifyTokenExpiry:Date
// })
//
// const User = mongoose.models.users || mongoose.model("users",userSchema)
//
// export default User;
//





import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;