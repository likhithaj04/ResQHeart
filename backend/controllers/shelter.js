const Shelter=require('../model/shelter');

module.exports.postShelter=async(req,res)=>{
 
  const shelters=new Shelter({
    ...req.body,
   animalTypes: req.body.animalTypes, // will be an array automatically
      facilities: req.body.facilities,
      gallery: req.files.map(f => ({ url: f.path, filename: f.filename }))
  })
  await shelters.save();
  res.status(201).json({ success: true, shelters });

};


module.exports.getShelter=async(req,res)=>{
  const shelters=await Shelter.find();
  res.json({Success:true,shelters});
    // console.log(shelters);

}

module.exports.getShelterID=async (req, res) => {
  const shelter = await Shelter.findById(req.params.id);
  if (!shelter) {
    return res.status(404).json({ success: false, message: 'Not found' });
  }
  // console.log(shelter)
  res.json({ success: true, shelter });
};


module.exports.deleteShelter=async(req,res)=>{
   const shelters=await Shelter.findById(req.params.id);
   console.log(shelters);
   await Shelter.findByIdAndDelete(req.params.id);
     res.json({message:"Deleted Successfully"})
};

