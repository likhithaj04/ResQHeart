import React, { useState } from 'react';
import './Register.css'; // External CSS for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    console.log(formData)
  };
 const navigate=useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const res= await axios.post(`${process.env.REACT_APP_API_URL}/user/register`,formData,{
      withCredentials:true
    });
    console.log(res.data);
    localStorage.setItem('token',res.data.token);
    toast.success("Registration successful");
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h3 className="text-center mb-4 text-light">📝 Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light" htmlFor="name">Full Name</label>
            <input
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light" htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light" htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <button className="btn btn-warning w-100">Register</button>

          <div className="text-center mt-3">
            <small className="text-light">
              Already have an account? <a href="/login" className="text-warning">Login</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
