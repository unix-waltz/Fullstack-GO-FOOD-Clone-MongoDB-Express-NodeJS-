import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    kepada:{
        required : true,
        type : String,
    },
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
export default mongoose.model("menu", Schema);