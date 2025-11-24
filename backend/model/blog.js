const mongoose=require('mongoose');
const User=require('./user')

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        url:String,
        filename:String
    },
    created_at:{
        type:Date,
        default:Date
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
})

module.exports=mongoose.model("Blog",blogSchema);