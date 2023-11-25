import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    pesan:{
        required : true,
        type : String,
    },
    nama:{
        required : true,
        type : String,
    },
    saran:{
        required : true,
        type : String,
    },
})
export default mongoose.model("user_inbox", Schema);