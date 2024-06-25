import React from 'react';
import Logo from '../../../assets/logo.png';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative text-white h-[400px] w-full hero-cont bg-center bg-cover"> {/* Apply hero-cont here */}
            <div className="absolute inset-0 bg-[rgba(0,27,136,0.8)] bg-opacity-70 h-full"></div> {/* Blue overlay */}
            <div className="relative inset-0 w-full h-full 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8">
                <nav className="h-20">
                    <div className="h-full flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="xs:h-[44px] 2xs-custom:h-[40px] h-[36px] me-2 rounded-[50%]" src={Logo} alt="" />
                            <h2 className="xs:text-[24px] 2xs-custom:text-[22px] text-xl font-semibold tracking-wide">Quick Translate</h2>
                        </div>
                        <div className="flex items-center lg-custom:gap-x-14 lg:gap-x-10 gap-x-5">
                            <div className="lg:flex hidden lg-custom:gap-x-8 gap-x-6 text-sm font-semibold tracking-[1.8px]">
                                <Link>Home</Link>
                                <Link>About Us</Link>
                                <Link>Services</Link>
                                <Link>FAQ</Link>
                                <Link>Blog</Link>
                            </div>
                            <Link to="/contact">
                                <button className="lg:block hidden hover:bg-indigo-600 hover:border-none rounded-md border tracking-[1.5px] font-semibold text-xs border-white bg-blue-500 px-5 py-[10px]">CONTACT US</button>
                            </Link>
                            <button className="lg:hidden flex justify-center items-center xs:w-10 xs:h-10 2xs-custom:h-9 2xs-custom:w-9 h-8 w-8 bg-[rgb(8,19,39)] rounded-[50%]">
                                <i className="fa-solid fa-bars xs:text-base 2xs-custom:text-[15px] text-sm"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className='mt-32 w-full flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-semibold'>Contact Us</h1>
                    <div className='flex mt-6'>
                        <Link to="/">
                            <h2 className='text-[13px] font-meidum tracking-wide'>HOME</h2>
                        </Link>
                        <span className='text-gray-400 text-[13px] mx-2'>/</span>
                        <h2 className='text-[13px] font-meidum tracking-wide'>CONTACT</h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;
