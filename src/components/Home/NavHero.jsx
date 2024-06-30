import React from 'react';
import { Link } from 'react-router-dom';
import './NavHero.css';
import NavLinks from '../common/NavLinks';

const NavHero = () => {
    return (
        <div className={`nav-hero bg-center 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8 text-white h-[700px] w-full bg-cover `}>
            <NavLinks />
            <div className='mt-24'>
                <div className='flex items-center sm:mb-8 xs:mb-6 mb-5'>
                    <div className="me-2 2xs-custom:inline-block hidden w-8 h-[2px] bg-yellow-500"></div>
                    <h2 className='text-yellow-300 xs:text-lg 2xs-custom:text-[17px] text-base'>Professional Translations Agency</h2>
                </div>
                <h1 className='md:text-[55px] sm:text-[45px] xs:text-[34px] 2xs-custom:text-[30px] text-[27px] font-black sm-custom:w-[650px] xs-custom:w-[90%] w-full md:leading-[70px] sm:leading-[56px] xs:leading-[48px]'>Now Order Professional Translations in Just a Few Easy Clicks</h1>
                <p className='sm:w-[600px] mt-8 leading-[30px] sm:text-[17.8px] xs:text-[16.5px] 2xs-custom:text-[15.5px] text-sm'>Our team of professional translators are here to help you translate your documents in just a few clicks. We ensure you get the best translation.</p>
                <div className='flex gap-x-7 sm:mt-8 xs:mt-10 2xs-custom:mt-14 2xs:mt-20 mt-16 text-[13px] font-semibold'>
                    <Link to="/contact">
                        <button className='bg-yellow-500 hover:text-white hover:bg-[rgb(179,143,36)] text-blue-950 rounded-lg py-3 xs:px-5 2xs-custom:px-4 px-3 tracking-[1.5px]'>CONTACT US</button>
                    </Link>
                    <button className='bg-blue-500 hover:bg-blue-800 rounded-lg py-3 xs:px-5 2xs-custom:px-4 px-3 tracking-[1.8px]'>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}

export default NavHero;
