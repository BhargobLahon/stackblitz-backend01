import { timeStamp } from "console";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({},{timeStamp:true});

export const Category = mongoose.model("Category",categorySchema);