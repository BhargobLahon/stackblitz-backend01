import mongoose from "mongoose";

const orderIdSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})
 
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    orderItems: {
        type: [orderIdSchema]
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }



}, { timestamps: true })