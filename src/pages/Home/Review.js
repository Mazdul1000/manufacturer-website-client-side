import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({review}) => {
    const{name,avatar, rating, message} = review;
    return (
        
      <div  class="card h-[350px] bg-gray-900 w-96 py-10 shadow-xl mx-auto md:ml-0 text-white">
      <div class="card-body">
      <div className="flex justify-center md:justify-end -mt-16">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-primary" src={avatar} alt=''/>
  </div>
        <h2 class="card-title font-mono font-bold text-xl">Rating: {rating|| 0} out of 5</h2>
        <p ><cite className='text-[16px] font-semibold font-mono'>"{message}"</cite> </p>
        <div class="card-actions justify-end">
          <h1 className='text-xl font-bold text-primary'>{name}</h1>
        </div>
      </div>
    </div>
       
    )
};

export default Review;