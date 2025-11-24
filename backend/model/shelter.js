const mongoose=require('mongoose')

const shelterSchema=new mongoose.Schema({
     shelterName: String,
  establishedIn: Number,
  address: String,
  website: String,
   contactNumber: String,
  email: String,
  capacity: Number,
  animalTypes: [String],
  facilities: [String],
  openingHours: String,
  totalVolunteers: Number,
  petsPresent: Number,
  petsAdopted: Number,
  livesSaved: Number,
  helpProvided: String,
  volunteerActivities: String,
   summary: String,
  successStories: String,
   gallery: [
    {
      url: String,
      filename: String
    }
],

})

module.exports=mongoose.model("Shelter",shelterSchema)