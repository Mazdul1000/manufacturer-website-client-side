import React from 'react';
import portfolio from '../../assets/image/portfolio.jpg';
import facebookIcon from '../../assets/icons/facebook.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';
import showcase1 from '../../assets/image/showcase 1.png';
import showcase2 from '../../assets/image/showcase 2.png';
import showcase3 from '../../assets/image/showcase 3.png';

const MyPorfolio = () => {
    return (
        <div className='min-h-screen'>
            <div class="hero min-h-[60vh] bg-base-200 shadow-2xl">
                <div class="hero-content flex-col justify-center align-center md:px-12 lg:flex-row">
                    <img src={portfolio} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='md:pl-20'>
                        <h1 class="text-5xl font-bold text-center md:text-left">Mazedul Hasan</h1>
                        <p className='text-2xl font-semibold mt-3 text-center md:text-left'>Front-end Web Developer</p>
                        <p class="py-6 text-xl font-semibold text-center md:text-left">I am a passionate web developer. Usally I work on front-end. I can build react application . As framework I can use Tailwind Css and Bootstrap . Besides I can use custom css. I can build web application with full authentication and authorization system.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row my-10 mx-5'>
                <div className='bg-base-200 basis-1/2 shadow-2xl p-5'>
                    <div>
                        <h2 className='text-3xl font-bold text-center mt-5'>About Me</h2>
                        <div className=' lg:pl-28 md:mt-10 mt-5 pl-5'>
                            <div className='text-xl font-semibold'>
                                <p>Name: Mazedul Hasan</p>
                                <p>Email: mazdul1000@gmail.com</p>
                                <p>Phone: +8801713507934</p>
                                <p>Education: B.S.S on Criminology and Police Science</p>
                                <p>Institution: University of Chittagong</p>
                                <div className='flex gap-5 mt-5 justify-center md:justify-start'>
                                    <div><a href="https://web.facebook.com/MazdulProdhan.mp/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="" /></a></div>
                                    <div><a href="https://www.linkedin.com/in/mazdul-prodhan-7a70b7177/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt='' /></a></div>
                                    <div><a href="https://github.com/Mazdul1000" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className='w-[48px]' alt="" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-base-200 basis-1/2'>
                    <div className=''>
                        <h2 className='text-3xl font-bold text-center mt-5'>Skills</h2>
                        <div className='mt-2 pl-5 md:pl-28'>

                            <h1 class="pl-10 pt-2 sm:pt-5 text-xl font-mono font-bold sm:pl-28 ">Html <span class=" text-md text-primary font-bold">80%</span></h1>
                            <div class="mt-2 ml-10 sm:ml-28 h-4 relative w-80 rounded-full overflow-hidden">
                                <div class=" w-full h-full bg-gray-200 absolute "></div>
                                <div class="h-full bg-yellow-400 sm:bg-green-500 absolute" style={{ width: '80%' }}></div>
                            </div>

                            <h1 class="pl-10 pt-2 sm:pt-5 text-xl font-mono font-bold sm:pl-28">Tailwind CSS <span class=" text-md text-red-500">70%</span></h1>
                            <div class="mt-2 ml-10 sm:ml-28 h-4 relative w-80 rounded-full overflow-hidden">
                                <div class=" w-full h-full bg-gray-200 absolute "></div>
                                <div class=" h-full bg-red-500 sm:bg-yellow-400 absolute" style={{ width: "70%" }}></div>
                            </div>
                            <h1 class="pl-10 pt-2 sm:pt-5  sm:pl-28 text-xl font-mono font-bold">Javascript <span class=" text-md text-green-500">60%</span></h1>
                            <div class="mt-2 ml-10 sm:ml-28 h-4 relative w-80 rounded-full overflow-hidden">
                                <div class=" w-full h-full bg-gray-200 absolute "></div>
                                <div class=" h-full bg-green-500 sm:bg-red-500 absolute" style={{ width: '60%' }}></div>
                            </div>
                            <h1 class="pl-10 pt-2 sm:pt-5  sm:pl-28 text-xl font-mono font-bold">React JS <span class=" text-md text-gray-600">30%</span></h1>
                            <div class="mt-2 ml-10 sm:ml-28 h-4 relative w-80 rounded-full overflow-hidden">
                                <div class=" w-full h-full bg-gray-200 absolute "></div>
                                <div class=" h-full bg-gray-600 sm:bg-indigo-500 absolute" style={{ width: '20%' }}></div>
                            </div>
                            <h1 class=" pl-10 pt-2 sm:pt-5  sm:pl-28 text-xl font-mono font-bold">Node Js <span class=" text-md text-indigo-500">10%</span></h1>
                            <div class="mb-10 mt-2 ml-10 sm:ml-28 h-4 relative w-80 rounded-full overflow-hidden">
                                <div class=" w-full h-full bg-gray-200 absolute "></div>
                                <div class=" h-full bg-indigo-500 sm:bg-gray-600 absolute" style={{ width: '10%' }}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

      <div className='my-28'>
          <h1 className='text-4xl text-primary font-bold text-center mb-10'>My Showcase</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-12 w-full place-items-center'>
                
                <div className='bg-base-200 shadow-2xl rounded-xl px-10 pb-10 hover:scale-105 transition-all duration-500'>
                    <h1 className='text-2xl my-3 font-mono font-bold text-center mb-10'>Manufacturer Company Site</h1>
                    <a href="https://agritools.web.app/" target="_blank" rel="noopener noreferrer"><img src={showcase1} className="w-full" alt="" /></a>
                </div>
            <div className='bg-base-200 shadow-2xl rounded-xl px-10 pb-10 hover:scale-105 transition-all duration-500'>
                <h1 className='text-2xl font-mono font-bold my-3 text-center mb-10'>Warehouse Management Site</h1>
                <a href="https://bike-house-25317.web.app/" target="_blank" rel="noopener noreferrer"><img src={showcase2} className="w-full" alt="" /></a>
            </div>
            <div className='bg-base-200 shadow-2xl rounded-xl px-10 pb-10 hover:scale-105 transition-all duration-500'>
                <h1 className='text-2xl font-mono font-bold my-3 text-center mb-10'>Independent Service Agency</h1>
                <a href="https://professional-counselling-app.web.app/" target="_blank" rel="noopener noreferrer"><img src={showcase3} className="w-full" alt="" /></a>
                </div>
        </div>
      </div>
        </div>
    );
};

export default MyPorfolio;