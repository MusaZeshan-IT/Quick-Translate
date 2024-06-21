import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8 bg-[rgb(25,32,87)] h-[420px] mt-10 pt-10'>
            <div className='w-full h-full'>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='flex items-center'>
                            <img className='h-[44px] me-2 rounded-[50%]' src={Logo} alt="" />
                            <h2 className='text-white text-[24px] font-semibold tracking-wide'>Quick Translate</h2>
                        </div>
                        <p className='text-[rgb(204,204,204)] text-[15px] w-96 mt-6 leading-[25px]'>Now you know that we are the best translating agnecy that you can find. We always aim not to leave any of our customers unsatisfied with our services.</p>
                        <div className='flex gap-x-5 mt-6'>
                            <i className='fa-brands fa-facebook-f text-white text-2xl'></i>
                            <i className='fa-brands fa-twitter text-white text-2xl'></i>
                            <i className='fa-brands fa-instagram text-white text-2xl'></i>
                            <i className='fa-brands fa-linkedin-in text-white text-2xl'></i>
                        </div>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <div className='flex flex-col gap-y-14'>
                            <div className='flex flex-col'>
                                <div>
                                    <h3 className='text-white font-semibold tracking-widest'>NAVIGATE</h3>
                                    <div className='flex text-[rgb(204,204,204)] mt-4 gap-x-7'>
                                        <Link>Home</Link>
                                        <Link>About Us</Link>
                                        <Link>FAQ</Link>
                                        <Link>Services</Link>
                                        <Link>Blog</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <h3 className='text-white font-semibold tracking-widest'>CONTACT US</h3>
                                    <div className='flex flex-col text-[rgb(204,204,204)] mt-4 gap-y-1'>
                                        <p className='tracking-wide'>+92 3079410053</p>
                                        <p>zeshan.qaiser@gmail.com</p>
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
