import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
      <Outlet />
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-48 bg-accent font-bold text-primary ">

      <li><Link to='/dashboard'>My Profile</Link></li>
      <li><Link to='/dashboard/myorders'>My Orders</Link></li>
      <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
      <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;