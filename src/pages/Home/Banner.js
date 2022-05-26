import React from 'react';

const Banner = () => {
    return (
        <div>
           <div className="hero min-h-[80vh] bg-[url('https://i.ibb.co/s2Kjm18/banner.jpg')]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md p-5 text-white bg-[rgb(148,163,184,0.4)]">
      <h1 className="mb-5 text-5xl font-bold font-mono">AgriTools</h1>
      <p className="mb-5 text-xl">Manufacturer and provider company for all type of agricultural and farming tools.</p>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;