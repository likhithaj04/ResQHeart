import Sidebar from './Sidebar'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

export default function BLogPosts() {
    let [blogs,setBlogs]=useState([]);

useEffect(()=>{
  axios.get(`${REACT_APP_API_URL}/blogs`)
     .then(res=>{
        console.log(res.data)
        setBlogs(res.data.blogs)
     }).catch(err=>{
        console.log(err);
     });
},[])

  const handleDelete=(id)=>{
    axios.delete(`${REACT_APP_API_URL}/blogs/${id}`)
    .then(()=>{
      toast.error("Blog deleted");
       setBlogs(prev => prev.filter(blog => blog._id !== id));
    })
    .catch(err => console.error(err));
    };

   
  return (
    <>
<div className='mains' style={{display:"flex"}}>
    <Sidebar/>
    <main className='main-content mt-5' style={{flex:"1", padding:"2rem"}}>
      <h1>All Blogs</h1>
      
    {blogs.map((blog) => (
      <div key={blog._id} className="card mb-4 shadow-lg" style={{ maxWidth: '600px', marginBottom: '20px' }}>
        <img src={blog.image?.url} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
        <div className="card-body">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>By:{blog.user.username}</p>
           <button className='btn btn' style={{width:"90px"}} onClick={()=>handleDelete(id)}>Delete</button>

        </div>
      </div>
    ))}
    </main>
    </div>
    </>
  )
}
