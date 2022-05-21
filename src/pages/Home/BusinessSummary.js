import React from 'react';

const BusinessSummary = () => {
    return (
        <div className=''>
            <div class="stats shadow bg-gray-900 rounded-none py-10  flex justify-center items-center gap-2">
  
  <div class="stat place-items-center text-white">
    <div class="stat-title font-bold">Revenue</div>
    <div class="stat-value">$12M</div>
    <div class="stat-desc font-bold">From 2020 to 2022 </div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title text-white font-bold">Customers</div>
    <div class="stat-value text-secondary">4,200</div>
    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div class="stat place-items-center text-primary">
    <div class="stat-title text-white font-bold">Shipment</div>
    <div class="stat-value">1,200+</div>
    <div class="stat-desc text-white font-bold">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default BusinessSummary;