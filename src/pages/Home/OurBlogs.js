import React from 'react';
import blog1 from '../../assets/image/blog1.jpg'
import blog2 from '../../assets/image/blog2.jpg'
import blog3 from '../../assets/image/blog-3.jpg'
import blog4 from '../../assets/image/blog4.jpg'

const OurBlogs = () => {
    return (
        <div className='px-12 my-10'>
            <h1 className='text-4xl font-bold text-primary my-10 text-center'>Our Other Services</h1>
            <div className='grid grid-cols-1 mt-4 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <div className='shadow-xl rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img className='' src={blog1} alt="" />
                    <span className='w-full block h-3 bg-[#FFC233]'></span>
                    <div className='p-7'>
                    <h1 className='font-semibold text-2xl'>IoT based farming</h1>
                    <p>We are providing all the equipment and training for IOT based farm. In this era of technology we should...<span className='font-bold text-xl'>See more</span></p>
                    </div>
                </div>
                <div className='shadow-xl rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img className='' src={blog2} alt="" />
                    <span className='w-full block h-3 bg-[#FFC233]'></span>
                    <div className='p-7'>
                    <h1 className='font-semibold text-2xl'>Climate Solution</h1>
                    <p>We develop the setup and environment based on the climate of the location that can cope with the nature. <span className='font-bold text-xl'>See more</span></p>
                    </div>
                </div>
                <div className='shadow-xl rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img src={blog3} alt="" />
                    <span className='w-full block h-3 bg-[#FFC233]'></span>
                    <div className='p-7'>
                    <h1 className='font-semibold text-2xl'>Cattle Housing</h1>
                    <p>We provide all the cattle housing equipment. We can also provide all the setup service. <span className='font-bold text-xl'>See more</span></p>
                    </div>
                </div>
                <div className='shadow-xl rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer'>
                    <img src={blog4} alt="" />
                    <span className='w-full block h-3 bg-[#FFC233]'></span>
                    <div className='p-7'>
                    <h1 className='font-semibold text-2xl'>Green House Setup</h1>
                    <p>We are providing the equitment and setup for green house cultivation. We have experts...<span className='font-bold text-xl'>See more</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurBlogs;