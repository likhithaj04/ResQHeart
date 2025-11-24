import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import Home from './Home';
export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      navigate('/');
      return;
    }
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
       <Home />  
      <div className="admin-content">
           
        <Outlet />    
      </div>
    </div>
  );
}
