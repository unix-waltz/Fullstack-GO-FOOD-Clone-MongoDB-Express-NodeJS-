import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    no:{
        required : true,
        type : String,
    },
    used:{
        required : true,
        type : Boolean,
        default: false
    },
})
export default mongoose.model("table", Schema);