import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8 bg-[rgb(25,32,87)] pt-10 pb-5'>
            <div className='w-full h-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-14'>
                    <div >
                        <div className='flex items-center'>
                            <Link>
                                <img className='h-[44px] inline-block me-2 rounded-[50%]' src={Logo} alt="" />
                                <h2 className='text-white inline-block text-[24px] font-semibold tracking-wide'>Quick Translate</h2>
                            </Link>
                        </div>
                        <p className='text-[rgb(204,204,204)] text-[15px] md-custom:w-96 sm-custom:w-[90%] mt-6 leading-[25px]'>Now you know that we are the best translating agnecy that you can find. We always aim not to leave any of our customers unsatisfied with our services.</p>
                        <div className='flex gap-x-5 mt-6'>
                            <Link to="">
                                <i className='fa-brands fa-facebook-f text-white text-2xl'></i>
                            </Link>
                            <Link to="">
                                <i className='fa-brands fa-twitter text-white text-2xl'></i>
                            </Link>
                            <Link to="">
                                <i className='fa-brands fa-instagram text-white text-2xl'></i>
                            </Link>
                            <Link to="">
                                <i className='fa-brands fa-linkedin-in text-white text-2xl'></i>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:justify-center mt-2'>
                        <div className='flex lg:flex-col md-custom:flex-row flex-col lg:gap-y-14 md-custom:gap-x-14 gap-y-8'>
                            <div className='flex flex-col'>
                                <div>
                                    <h3 className='text-white font-semibold tracking-widest'>NAVIGATE</h3>
                                    <div className='flex flex-wrap text-[rgb(204,204,204)] mt-4 gap-x-7 gap-y-3'>
                                        <Link to="/services">Services</Link>
                                        <Link to="/about-us">About Us</Link>
                                        <Link to="/faq">FAQ</Link>
                                        <Link to="/blog">Blog</Link>
                                        <Link to="/courses">Courses</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <h3 className='text-white font-semibold tracking-widest'>CONTACT US</h3>
                                    <div className='flex lg:flex-col flex-wrap text-[rgb(204,204,204)] mt-4 lg:gap-y-1 gap-x-8 gap-y-3'>
                                        <p className='tracking-wide'>+92 3079410053</p>
                                        <p>musazeshan.it@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='border-t pt-4 text-[rgb(204,204,204)] text-[15px] mt-20'>Copyright &copy; 2024 Quick Translate. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
