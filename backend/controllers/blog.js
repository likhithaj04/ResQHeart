const Blog=require('../model/blog')


module.exports.showBlogs= async (req, res) => {
  const blogs = await Blog.find().populate('user');
  res.json({blogs});
}



module.exports.postBLogs= async (req, res) => {
  const userId=req.user.id;

    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: {
        url: req.file.path, //  Cloudinary gives `path`
        filename: req.file.filename
      },
      user:userId
    });
    console.log(userId);
     console.log(blog)
    await blog.save();
    res.status(201).json(blog);
};

module.exports.deleteBlogs=async (req, res) => {
  
  const blog = await Blog.findById(req.params.id);
    console.log('Blog found:', blog);

if (blog.user.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Forbidden: Not your blog' });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  };
