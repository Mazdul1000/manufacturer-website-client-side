import React from 'react';

const ContactUs = () => {
    return (
        <div className='min-h-[60vh] bg-[#FFC233] flex flex-col justify-center items-center'>
           <div className='my-4 text-center'>
           <h1 className='text-2xl font-mono font-bold'>Do you want to know more?</h1>
            <h3 className='text-xl font-mono font-semibold px-10 md:px-0'>Send us a note and we will help you with your questions.</h3>
           </div>
            <div className='w-1/2 grid gap-5 grid-cols-1 my-10 lg:grid-cols-3 font-bold font-serif'>
                <div>
                <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full border-2 max-w-xs bg-transparent placeholder:text-[#333] placeholder:font-semibold font-semibold" />
                </div>

                <div>
                <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter you email" className="input input-bordered w-full border-2 max-w-xs bg-transparent placeholder:text-[#333] placeholder:font-semibold font-semibold" />
                </div>

                <div>
                <label className="label">
                                <span className="label-text">District</span>
                            </label>
                            <input type="text" placeholder="Enter you district" className="input input-bordered w-full border-2 max-w-xs bg-transparent placeholder:text-[#333] placeholder:font-semibold font-semibold" />
                </div>

                <div className='lg:col-span-3'>
                <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Enter your message" className="input input-bordered border-2 w-full bg-transparent placeholder:text-[#333] placeholder:font-semibold resize-none h-[150px] font-semibold"/>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;