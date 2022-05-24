import { CollectionIcon, MenuAlt3Icon, MenuIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Headers = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    toast('You have been signed out');
  }
  console.log(location.pathname)
    return (
        <div>
            <div className="navbar bg-gray-300 md:px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/blogs'>Blogs</Link></li>
      {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
      <li><Link to='/myportfolio'>My Portfolio</Link></li>
      <li> {
      user?
      <button onClick={logOut} className="font-bold btn-primary text-white">Sign Out</button>
      :
      <Link to='/login' className=" btn-primary text-white">Login</Link>

    }</li>
      </ul>
    </div>
    <Link to='/home' className=" text-primary text-3xl font-bold normal-case">AgriTools</Link>
  </div>

 {location.pathname === '/dashboard' && <div className="navbar-end">
  <label tabIndex="1" htmlFor="dashboard-side-menu" className="btn btn-ghost lg:hidden">
       <CollectionIcon className='w-[30px]' ></CollectionIcon>
      </label>
  </div>}

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal w-full p-0 text-primary font-bold text-xl gap-2">
      <li><Link to='/blogs'>Blogs</Link></li>
      {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
      <li><Link to='/myportfolio'>My Portfolio</Link></li>
      <li> {
      user?
      <button onClick={logOut} className="font-bold btn-primary rounded-xl text-white">Sign Out</button>
      :
      <Link to='/login' className=" btn-primary text-white">Login</Link>

    }</li>
    </ul> 
  <div>
   
    
  </div>
  </div>
</div>
        </div>
    );
};

export default Headers;