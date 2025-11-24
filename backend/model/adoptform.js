
const mongoose=require('mongoose');
const Pet=require('./pet');

const adoptformSchema=new mongoose.Schema({
    fullname:{
         type:String,
         required:true
    },
    gender:{
        type:String
    },
    mobile:Number,
    address:String,
    email:String,
    petname:String,
    experience:{
      type:String,
      default:"no"
    },
    livewith:String,
      user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },

  status:{
    type:String,
    enum: ['pending', 'Approved', 'Rejected'],
    default: 'pending'
  }
})


module.exports=mongoose.model("Adoptform",adoptformSchema);
