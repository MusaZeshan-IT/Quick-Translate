// File path: src/components/Service.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Service = ({ imgUrl, title, desc }) => {
    const location = useLocation();

    return (
        <div className={`shadow-[0px_0px_20px_rgba(0,0,0,0.13)] flex p-5 flex-col items-center justify-center bg-[rgb(247,247,247)] ${location.pathname === '/services' ? 'h-[340px]' : 'h-[380px]'} rounded-lg`}>
            <div className='bg-blue-200 p-5 rounded-[50%]'>
                <img className='sm:h-16 sm:w-16 2xs-custom:h-20 2xs-custom:w-20 h-16 w-16' src={imgUrl} alt="" />
            </div>
            <h3 className='mt-8 font-semibold sm:text-[16.5px] 2xs-custom:text-2xl text-xl text-[rgb(19,40,126)]'>{title}</h3>
            <p className='mt-3 sm:text-[14.7px] 2xs-custom:text-lg text-[15px] leading-7 text-center text-[rgb(129,135,150)]'>{desc}</p>
            {location.pathname !== '/services' && (
                <Link to='/services'>
                    <span className='mt-5 sm:text-base 2xs-custom:text-lg text-base inline-block text-[rgb(60,146,255)]'>Read More</span>
                    <i className='fa-solid fa-right-long ml-2 text-sm text-[rgb(60,146,255)]'></i>
                </Link>
            )}
        </div>
    );
}

export default Service;
