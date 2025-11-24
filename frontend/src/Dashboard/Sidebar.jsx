import React from 'react'
import './Sidebar.css'
export default function Sidebar() {
  return (
    <div className='admin-dashboard'>
      <aside className="admin-sidebar">
      <h2 className="sidebar-logo">ResQHeart 🐾</h2>
      <ul className="sidebar-nav">
        <li> <a href='/admin'> Dashboard</a>   </li>
        <li><a href="/managepets" style={{ textDecoration: "none", color: "inherit" }}> Manage Pets</a></li>
        <li> <a href="/adoptionformdata" > Applications</a></li>
        <li> <a href="/shelterform"> Add Shelter</a></li>
         <li> <a href="/donationlist">Donations</a></li>
        <li> <a href='/blogPosts'> Blog Posts</a>  </li>
        <li> <a href="/message"> Contact</a>  </li>
        <li> <a href="/userList">Users</a>  </li>

      </ul>
    </aside>
    </div>
  )
}
