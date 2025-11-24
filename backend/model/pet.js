const mongoose=require('mongoose');
const User=require('./user')

const petSchema=new mongoose.Schema({
   petname:{
    type:String,
    required:true
   },
  
  age:{
    type:Number
  },
  gender:{
    type:String
  },
  breed:{
type:String
  },
  type:{
    type:String,
  },
  availability:{
    type:String
  },
  shelter:{
    type:String
  },
  address:{
    type:String
  },
  nature:{
    type:String
  },
  medical:{
    type:String
  },
  information:{
    type:String
  },
  image:{
    url:String,
    filename:String
  },
  adoptee:[ {
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    default:null
   }
  ]
});

module.exports=mongoose.model("Pet",petSchema)