const Adoptform=require('../model/adoptform')
const nodemailer=require('nodemailer')

module.exports.postPet=async(req,res)=>{
  try{ 
    const  petId=req.params.id;
    const userId=req.user.id;
   
    const newform=new Adoptform({
      ...req.body,pet:petId,
      user:userId
    });

    await newform.save();
    console.log("saved");
    res.json({success:true,message:"Adoption form submitted"})

  }catch(err){ 
     console.log(err);
    res.status(500).json({ success: false, message: err.message });

  }
}

module.exports.getPet=async(req,res)=>{
 const adoptions = await Adoptform.find()
      .populate('pet')
      .populate('user')
      .lean();
      // console.log(adoptions)
    res.json({ success: true, adoptions });  
}

module.exports.acceptAdoption=async(req,res)=>{
 
  try{
  const adoption = await Adoptform.findById(req.params.id).populate('user');

    if (!adoption) {
      return res.status(404).json({ success: false, message: 'Adoption form not found' });
    }

    adoption.status = 'Approved';
    await adoption.save();

    console.log("Updated adoption:", adoption);

        const recipient = adoption.email || adoption.user.email;

    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      }
    });

    const mailOptions={
      from:process.env.SMTP_USER,
      to:recipient,
      subject:"Adoption Approved",
      text:`Congratulations ${adoption.fullname}! Your adoption request has been approved.
      Your meeting Schedule with the Shelter home will be sent soon`    
    };
 console.log(mailOptions)
    await transporter.sendMail(mailOptions)

    res.json({ success: true, message: "Adoption approved and email sent."});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
  
}

module.exports.rejectAdoption=async(req,res)=>{
 
  try{
    const adoption = await Adoptform.findByIdAndUpdate(
      req.params.id,
      { status: 'Rejected' },
      { new: true }
    ).populate('user');
     
    console.log(adoption)
    const recipient = adoption.email || adoption.user.email;

    if (!adoption) {
      return res.status(404).json({ success: false, message: 'Adoption form not found' });
    }
    
    adoption.status = decision;
    await adoption.save();
    
    const transporter=nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      }
    });

    const mailOptions={
      from:process.env.SMTP_USER,
      to:recipient,
      subject:`Adoption ${decision}`,
      text:`Hello ${adoption.fullname}, we are sorry to inform you that your adoption request was rejected.`
    };

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: `Adoption ${decision} and email sent.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
  
}
