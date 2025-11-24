const express=require('express');
const Razorpay=require('razorpay');
const Donation=require('../model/donation');
const crypto=require('crypto')
const user=require ('../model/user');
const nodemailer=require('nodemailer')

const razorpay=new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_SECRET_KEY
})

module.exports.donation=async(req, res) => {

     const { name, email, phone, amount } = req.body.form; 
    console.log("Received Data:", name, email, phone, amount);

    if (!name || !email || !phone || !amount) {
      return res.status(400).json({ error: "All fields are required" });
    }

const amountNum = Number(amount);
console.log(amountNum)
    // Razorpay order options
    const options = {
      amount: amountNum, 
      currency: "INR",
      receipt: `donation_${Date.now()}`,
    };
    console.log("Order Options:", options);

    // Create Razorpay order
    const order = await razorpay.orders.create(options);
    console.log("Razorpay Order:", order);

    // Save donation to DB
    const donation = await Donation.create({
      name,
      email,
      phone,
      amount:amountNum,
      orderId: order.id,
      status: "SUCCESS",
      // user:req.user.id,
      shelter:req.body.form.shelterId
    });
    const populatedDonation = await Donation.findById(donation._id)
  // .populate("user")
  .populate("shelter","shelterName");

 if (populatedDonation.shelter) {
  populatedDonation.shelterName = populatedDonation.shelter.shelterName;
  await populatedDonation.save();
}


    // console.log("Donation Saved:", populatedDonation);
     
    const reciepient=donation.email ||  donation.user.email;

    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      }
    });

    const mailOptions={
      from:process.env.SMTP_USER,
      to:reciepient,
      subject:"Thank you for the donation",
        html: `
        <h2>Dear ${name},</h2>
        <p>We sincerely thank you for your generous donation towards <b>ResQHeart</b>.</p>
        
        <h3>Donation Receipt</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr><td><b>Receipt No</b></td><td>${donation.orderId}</td></tr>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>
          <tr><td><b>Amount</b></td><td>₹${amountNum}</td></tr>
          <tr><td><b>ShelterName</b></td><td>${populatedDonation.shelter?.shelterName || "N/A"}</td></tr>
          <tr><td><b>Status</b></td><td>${donation.status}</td></tr>
          <tr><td><b>Date</b></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
        
        <p>We truly appreciate your support in helping strays. 🐾</p>
        <p>Warm Regards,<br><b>ResQHeart Team</b></p>
      `,
    }
    // console.log(mailOptions);
    await transporter.sendMail(mailOptions);
return res.json({
  success: true,
  message: "Mail sent",
  orderId: order.id,
  key: process.env.RAZORPAY_KEY_ID
});  }


//list donation 
 module.exports.donationlist=async(req,res)=>{
  const data=await Donation.find()
  res.send(data)
 }

