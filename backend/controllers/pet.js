const express=require('express');
const Pet=require('../model/pet');


//getPet
module.exports.showPet=async(req,res)=>{
  const pets=await Pet.find()
  res.send(pets);
}


module.exports.petDataById=async(req,res)=>{
  const pets=await Pet.findById(req.params.id);
  res.send(pets);
}




//add pets by admin
module.exports.addPet=async(req,res)=>{
  

  // console.log('req.body:', req.body);
  //   console.log('req.file:', req.file);

    const image = {
      url: req.file.path,
      filename: req.file.filename
    };
  
const newPet = new Pet({
      ...req.body,  
      image         
    });
  const savedPet = await newPet.save();
    console.log(savedPet);
  res.json({success:true,message:'Successfuly added'})
  }


module.exports.deletePet = async (req, res) => {

    const pet = await Pet.findById(req.params.id);
    console.log(pet);
    await Pet.findByIdAndDelete(req.params.id);
    console.log(pet);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
 
    res.json({message:"Pet deleted successfully"});   // send only that pet
  
};




