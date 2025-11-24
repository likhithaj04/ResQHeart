const mongoose=require('mongoose');
const User=require('./user')


const contactSchema=new mongoose.Schema({
    username:{
        type:String,
        requirred:true
    },

    email:String,
    message:String,
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
        }
    ]
});

module.exports=mongoose.model("Contact",contactSchema)