import React, { useState } from 'react';
import './Login.css'; // Import the CSS
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

export default function Login() {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const {username,password}=formData;
  try { 
    const res= await axios.post(`${import.meta.env.VITE_API_URL}/user/login`,
      {username,password},
      {withCredentials:true
    });
    // console.log(document.cookie);

      if (res.data.success) {
  // localStorage.setItem('token', res.data.token);
toast.success('login successfull')     
    localStorage.setItem('isAdmin',res.data.isAdmin);    

 if (res.data.isAdmin) {
        navigate('/admin'); 
      } else {
        navigate('/'); 
      }
    } else {
      alert(res.data.message);
    }
  } catch (err) {
    console.error(err);
    toast.error("login failed")
  }
  };

  return (
    <div className="login-page">
      
      <div className="login-card">
        <h3 className="text-center mb-4 text-dark"> Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">Username</label>
            <input
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              id="username"
              name="username"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">Password</label>
            <input
              className="form-control"
              type="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button className="btn btn-warning w-100">Login</button>

          <div className="text-center mt-3">
            <small className="text-dark">
              Yet to register? <a href="./register" className="text-warning"> <b> <i>Create an account</i></b></a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
