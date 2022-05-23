import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=''>
            <div className="stats shadow bg-gray-900 rounded-none py-10  flex justify-center items-center gap-2">
  
  <div className="stat place-items-center text-white">
    <div className="stat-title font-bold">Revenue</div>
    <div className="stat-value">$12M</div>
    <div className="stat-desc font-bold">From 2020 to 2022 </div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-white font-bold">Customers</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center text-primary">
    <div className="stat-title text-white font-bold">Shipment</div>
    <div className="stat-value">1,200+</div>
    <div className="stat-desc text-white font-bold">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default BusinessSummary;