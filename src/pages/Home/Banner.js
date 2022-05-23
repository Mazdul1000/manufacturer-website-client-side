import React from 'react';

const Banner = () => {
    return (
        <div>
           <div className="hero min-h-[80vh] bg-[url('/src/assets/image/banner.jpg')]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold font-mono">AgriTools</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary text-accent">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;