const mongoose=require('mongoose')
// const user=require('../model/user')
// const Shelter=require('../model/shelter')
const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String, // Razorpay order_id
      required: true,
    },
    paymentId: {
      type: String, // Razorpay payment_id
    },
    signature: {
      type: String, // Razorpay signature
    },
    status: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED"],
      default: "PENDING",
    },
      // user: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'User',
      //   required: true
      // },
      shelter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shelter",
        required:true
      },
      shelterName: String,
  },
  { timestamps: true }
)

module.exports=mongoose.model("Donation",donationSchema)