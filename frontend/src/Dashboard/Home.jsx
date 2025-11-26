import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import './Home.css';
import axios from "axios";

export default function Home() {
  const [stats, setStats] = useState({
    totalPets: 0,
    totalApplications:0,
    totalDonations: 0,
    pendingApplications: 0,
    totalShelters: 0
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/admin/stats`, { withCredentials: true })
      .then(res => {
        setStats(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

 return (
    <div className="admin-main">
      <h1 className="admin-heading ms-4">Welcome, Admin!</h1>
      <div className="admin-stats ms-4">
        <div className="stat-card">🐶 Total Pets: <span>{stats.totalPets}</span></div>
        <div className="stat-card">🐶 Total adoption: <span>{stats.totalApplications}</span></div>
        <div className="stat-card">💖 Total Donations: <span>₹{stats.totalDonations}</span></div>
        <div className="stat-card">📝 Pending Applications: <span>{stats.pendingApplications}</span></div>
        <div className="stat-card">🏠 Shelter Homes: <span>{stats.totalShelters}</span></div>
      </div>
    </div>
  );
}
 