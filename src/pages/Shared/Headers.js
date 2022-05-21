import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <div class="navbar bg-gray-300 px-12">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <Link to='/home' class=" text-primary text-3xl font-bold normal-case">AgriTools</Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-primary font-bold text-xl">
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul> 
  <div>
    <button class="btn btn-sm btn-primary text-white">Sign Out</button>
  </div>
  </div>
</div>
        </div>
    );
};

export default Headers;