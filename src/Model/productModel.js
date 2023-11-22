import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    title:{
        required : true,
        type : String,
    },
    category:{
        required : true,
        type : String,
    },
    price:{
        required : true,
        type : Number,
    },
    description:{
        required : false,
        type : String,
    },
    thumbnail:{
        required : true,
        type : String,
    },
    discount:{
        required : false,
        type : Number,
    },
    total_seller:{
        required : false,
        type : Number,
    },
 
})
export default mongoose.model("menu", Schema);