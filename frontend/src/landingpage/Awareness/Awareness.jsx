import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Articles from './Articles'
import axios from 'axios';
import { toast } from "react-toastify";


export default function Awareness() {
  const[blogs,setBlogs]=useState([]) 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
    .then(res=>{
      setBlogs(res.data.blogs);
          console.log("BLOG RESPONSE:", res.data);
        console.log("API URL:", import.meta.env.VITE_API_URL);

    }).catch(err=>{
      console.log("error: ",err);
    });
  },[]);


  const handleDelete=(id)=>{
    axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${id}`,{withCredentials:true})
    .then(()=>{
      toast.success("Blog deleted");
       setBlogs(prev => prev.filter(blog => blog._id !== id));
    })
    .catch(err =>{
      const msg="Something went wrong while deleting";
      toast.error("Deletion Failed: You are not the owner of the blog")
    });
    };

  return (
    <>
     <Hero/>
     {/* <AddArticle/> */}

      <div style={{ margin: '2rem 3rem' }}>
    <a href="/addBlog" className="btn btn-primary">
      Add New Article
    </a>
    <br/>
        <br/>
    <p><b>Share your journey as a pet parent, a heartfelt rescue, or an inspiring story that could touch lives and spread awareness.</b></p>

  </div>

  
   {Array.isArray(blogs) &&
 blogs.map((blog) => (
   <Articles
     key={blog._id}
     id={blog._id}
     title={blog.title}
     description={blog.content}
     image={blog.image?.url}
     user={blog.user?.username || "unknown"}
     onDelete={handleDelete}
   />
 ))}

  
    </>
  
  )
}
