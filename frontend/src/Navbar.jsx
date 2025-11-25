import React from 'react';
import logo from './assets/logo.png'; 
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export default function Navbar() {
   const navigate=useNavigate();
   const[isLoggedIn,setIsLoggedIn]=useState(false);
  
   useEffect(()=>{
    // const token=localStorage.getItem('token');
    // setIsLoggedIn(!!token);
   
    const authCheck=async()=>{
      try{
        const res=await axios.get(`${REACT_APP_API_URL}/check`,{
          withCredentials:true
        });
        if (res.data.success) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }catch(err){
           console.log('Not authenticated',err);
           setIsLoggedIn(false);
      }
    };
    authCheck();
   },[])

   const handleLogout=async()=>{
    try{
      await axios.post(`${REACT_APP_API_URL}/user/logout`,{},{
        withCredentials:true
      });
      // localStorage.removeItem('token');
      localStorage.clear();

      setIsLoggedIn(false);
      navigate('/'); // Go home after logout

    } catch (err) {
      console.error(err);
      alert('Error logging out.');
    }
    }
   
     const navigation=()=>{
          navigate('/Login')
   }



  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo with hover bounce */}
          <a className="navbar-brand bounce-hover" href="#">
            <img src={logo} alt="Logo" height="50" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"right"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link hover-scale" to="/"> Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-scale" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-scale" href="/adopt">Adopt</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-scale" href="/donate">Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-scale" href="/awareness">Awareness</a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-scale" href="/contact">Contact</a>
              </li>
            </ul>
              
            <div className="d-none d-lg-block">
              {isLoggedIn ? (
                <button className="btn btn-outline-danger fw-bold rounded-pill" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-outline-success fw-bold rounded-pill" onClick={navigation}>
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
