
const Adoptform = require('../model/adoptform');
const User = require('../model/user');
const Blog = require('../model/blog');
const Pet=require('../model/pet')
const Shelter=require('../model/shelter')
const Donation=require('../model/donation')

exports.getDashboard = async (req, res) => {
  try {
    const users = await User.find({});
    const adoptions = await Adoptform.find({}).populate('pet').populate('user');
    const blogs = await Blog.find({}).populate('user');

    res.json({
      success: true,
      message: 'Admin dashboard data fetched',
      users,
      adoptions,
      blogs
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};


module.exports.getusers=async(req,res)=>{
   const users = await User.find({}, "-password");

    const userStats = await Promise.all(
      users.map(async (user) => {
const petCount = await Adoptform.countDocuments({ user: user._id.toString() });
        const blogCount = await Blog.countDocuments({ user: user._id });
        return {
          _id: user._id,
          username: user.username,
          email: user.email,
          petCount,
          blogCount
        };
      })
    );

    res.json(userStats);
}

module.exports.stats=async(req,res)=>{
  const totalPets = await Pet.countDocuments();
      const totalApplications = await Adoptform.countDocuments();

    const totalDonations = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const pendingApplications = await Adoptform.countDocuments({ status: "pending" });
    const totalShelters = await Shelter.countDocuments();

    res.json({
      totalPets,
      totalApplications,
      totalDonations: totalDonations[0]?.total || 0,
      pendingApplications,
      totalShelters
    });
}