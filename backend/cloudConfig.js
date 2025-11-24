const cloudinary=require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET

});

const storage = new CloudinaryStorage({//create an new folder in cloudinary
  cloudinary: cloudinary,
  params: {
    folder: 'resqheart_dev',
    allowedFormats: ["png","jpg","jpeg"], // supports promises as well
  },
});
 

module.exports={
    cloudinary,
    storage
}