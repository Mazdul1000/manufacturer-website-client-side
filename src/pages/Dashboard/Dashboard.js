import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h1 className="text-5xl">Dashboard</h1>
      <Outlet />
    
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-accent font-bold text-primary">

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