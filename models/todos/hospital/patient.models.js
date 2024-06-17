import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        enum:["male","female"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }



},{timestamps:true})