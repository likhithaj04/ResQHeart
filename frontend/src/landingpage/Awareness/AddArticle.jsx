import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddArticle.css';
import axios from 'axios';
import { toast } from "react-toastify";


export default function AddArticle() {
  const [fileData, setFileData] = useState(null);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

 
  //cloudinary file input
  const handleFileChange = (event) => {
     setFileData(event.target.files[0]); 

  }

  const handleChange = (event) => {
    setBlog((currData) => ({
      ...currData,
      [event.target.name]: event.target.value
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();

   if (!fileData) {
    alert('Please choose an image!');
    return;
  }

//appending the data to an object
    const formData=new FormData();
  formData.append('title', blog.title);
  formData.append('content', blog.content);
  formData.append('image', fileData);

//   for (let pair of formData.entries()) {
//   console.log(pair[0], pair[1]);
// }

    axios.post('process.env.REACT_APP_API_URL/blogs', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials:true
    })
      .then(res => {
        console.log("Blog added", res.data);
        setBlog({ title: "", content: "" });
        setFileData(null);
        toast.success('Blog added!');
        navigate('/awareness');
      })
      .catch(err => {
        console.error('Error adding blog:', err);
        toast.error("Failed to add the blog")
      });

  };


  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light" encType='multipart/form-data'>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="6"
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="file"
            name="image"
            className="form-control"
            // value={blog.image}
            onChange={handleFileChange}
            placeholder="Paste image URL"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Publish Blog
        </button>
      </form>
    </div>
  )
}
