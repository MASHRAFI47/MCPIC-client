// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

//css
import './banner.css'


///lottie react
import Lottie from "lottie-react";
import laptopAnimation from "../../../assets/laptopEdit.json";
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';
import { GoHorizontalRule } from "react-icons/go";



const Banner = () => {

    const { theme } = useAuth();


    return (
        // <div className="">
        //     <Swiper
        //         slidesPerView={1}
        //         spaceBetween={30}
        //         loop={true}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         navigation={true}
        //         modules={[Pagination, Navigation]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        //             <div className={`hero min-h-screen ${theme == "synthwave" ? "bg-[#08142e]" : "bg-[#031848]"} hero-grid`}>
        //                 <div className="hero-content flex-col lg:flex-row-reverse items-center">
        //                     <div className='' data-aos="fade-left">
        //                         <Lottie animationData={laptopAnimation} loop={true} className='banner-pic' />
        //                     </div>
        //                     <div data-aos="fade-right">
        //                         <p className=".tags">Mirpur Cantonment · Est. 2022</p>
        //                         <h1 className="text-4xl md:text-5xl font-bold text-white">Discover New Events And Blogs From Here!</h1>
        //                         <p data-aos="fade-down" className="py-6 text-white">The homepage prominently displays featured events, trending activities, and new announcements, ensuring you never miss out on important updates.</p>
        //                         <button data-aos="fade-in" className="btn glass bg-[#4B70F5] hover:bg-transparent text-white"><a href="#about">Learn More</a></button>
        //                     </div>
        //                 </div>
        //             </div>

        //         </SwiperSlide>

        //     </Swiper>
        // </div>

        <div className='lg:min-h-screen hero-grid pb-10 md:pb-10 lg:pb-0'>
            <div className='container mx-auto'>
                <div>
                    <div className='grid md:grid-cols-12 gap-3'>
                        <div className='flex-1 col-span-5'>
                            <p className="tags text-[11px] pt-2 flex items-center gap-2 px-8 md:px-10 lg:px-0" data-aos="fade-in" data-aos-duration="500"><GoHorizontalRule className='scale-x-150' /> MCPIC · Est. 2022</p>

                            <div className='pt-16 leading-none pl-8 md:pl-10 lg:pl-0'>
                                <h1 className='text-6xl md:text-[4rem] lg:text-[6rem] text-white leading-none' data-aos="slide-up" data-aos-duration="500">Discover</h1>
                                <h1 className='text-6xl md:text-[4rem] lg:text-[6rem] text-[#30c3b6] leading-none' data-aos="slide-up" data-aos-duration="800">New Events</h1>
                                <h1 className='text-6xl md:text-[4rem] lg:text-[6rem] text-[#30c3b6] leading-none bg-gradient-to-r from-[#0f82c0] to-[#cc00b8] bg-clip-text text-transparent' data-aos="slide-up" data-aos-duration="1100">And Blogs.</h1>
                            </div>

                            <p className='pt-6 px-8 md:px-10 lg:px-0' data-aos="fade-up" data-aos-duration="1200">MCPIC is dedicated to fostering a community of innovative thinkers, tech enthusiasts, and future leaders in information technology and computer science.</p>


                            <div className='pt-6 pl-8 md:pl-10 lg:pl-0'>
                                <NavLink to={"/events"} className="btn text-sm font-semibold md:mr-5 px-5 border-[#30c4b6] bg-[#30c4b6] text-[#080f0e] hover:bg-[#1c9e92] hover:border-[#30c4b6] transition-all ease-in-out duration-500" data-aos="slide-up" data-aos-duration="1400">Explore Events <MdArrowRightAlt className='text-lg cursor-pointer' /> </NavLink>

                                <NavLink to={"/events"} className="btn text-sm text-white md:mr-5 px-5 border-[#0f2422] bg-transparent hover:bg-transparent hover:border-[#30c4b6] hover:text-[#1c9e92] transition-all ease-in-out duration-500" data-aos="slide-up" data-aos-duration="1400">About the club</NavLink>
                            </div>
                        </div>

                        <div className='col-span-2'></div>


                        <div className='flex col-span-5 justify-center items-center pt-10 md:pt-0 lg:pt-0 pr-0 md:pr-8 lg:pr-0'>
                            <div className="mockup-code w-full bg-[#0a1714] text-xs space-y-2 text-[#8a92b2]" data-aos="fade-down" data-aos-duration="1400">

                                <pre className="text-[#5c6280] pl-8">
                                    <code>// MCPIC Event System</code>
                                </pre>

                                <pre data-prefix="">
                                    <code><span className='text-[#7d60fe]'>const</span> <span className='text-[#0eb8df]'>club</span> = &#123;</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&nbsp;&nbsp;name: <span className='text-[#51ff8e]'>"MCPIC"</span>,</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&nbsp;&nbsp;since: <span className='text-[#fecc51]'>2022</span>,</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&nbsp;&nbsp;events: <span className="text-[#02b9df]">await</span> fetch(<span className='text-[#51ff8e]'>"/api/events"</span>),</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&nbsp;&nbsp;members: <span className='text-[#fecc51]'>150</span><span className='text-[#51ff8e]'>+</span>,</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&#125;;</code>
                                </pre>

                                <pre data-prefix="">
                                    <code>&nbsp;</code>
                                </pre>

                                <pre data-prefix="">
                                    <code><span className="text-[#02b9df]">club</span>.<span className="text-[#02b9df]">nextEvent</span>() <span className="cursor">|</span></code>
                                </pre>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner