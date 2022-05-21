import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({review}) => {
    const{name, avatar, designation,message} = review;
    return (
        
            <div class="max-w-md py-4 h-[300px] px-8 bg-white shadow-2xl rounded-lg my-20 mx-3">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={avatar} alt=''/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">{designation}</h2>
    <p class="mt-2 text-gray-600">{message}</p>
  </div>
  <div class="flex justify-end mt-4">
    <Link to='/' class="text-xl font-medium text-indigo-500">{name}</Link>
  </div>
</div>
       
    );
};

export default Review;