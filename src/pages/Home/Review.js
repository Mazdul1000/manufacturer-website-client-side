import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({review}) => {
    const{name,avatar,productName, message} = review;
    return (
        
            <div className="max-w-md py-4 h-[300px] px-8 bg-white shadow-2xl rounded-lg my-20 mx-3">
  <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-primary" src={avatar} alt=''/>
  </div>
  <div>
    <h2 className="text-gray-800 text-2xl font-semibold">Product Name: {productName}</h2>
    <p className="mt-2 text-gray-600">{message}</p>
  </div>
  <div className="flex justify-end mt-4">
    <Link to='/' className="text-xl font-medium text-indigo-500">{name}</Link>
  </div>
</div>
       
    );
};

export default Review;