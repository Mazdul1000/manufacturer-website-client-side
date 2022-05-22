import React from 'react';
import loadingSpinner from '../../assets/icons/loadingSpinner.svg'

const LoadingSpinner = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center ">
        <img className='w-1/6 animate-spin' src={loadingSpinner} alt="" srcSet="" />
     </div>
    );
};

export default LoadingSpinner;