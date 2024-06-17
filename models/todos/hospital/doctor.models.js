import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String
    },
    addressLine1:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }

})
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    exp:{
        type:Number,
        default:0,
        required:true
    },
    worksInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }


},{timestamps:true})