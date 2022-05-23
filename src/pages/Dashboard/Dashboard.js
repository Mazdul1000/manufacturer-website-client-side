import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <h1 className="text-5xl text-center">Dashboard</h1>
   
<label for="my-modal-6" class="btn modal-button">open modal</label>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
      <Outlet />
    
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-48 bg-accent font-bold text-primary ">

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