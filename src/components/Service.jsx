import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ imgUrl, title, desc }) => {
    return (
        <div className='flex p-5 flex-col items-center justify-center bg-[rgb(247,247,247)] w-[340px] h-[380px] rounded-lg shadow-md shadow-gray-200'>
            <div className='bg-blue-200 p-5 rounded-[50%]'>
                <img className='h-16 w-16' src={imgUrl} alt="" />
            </div>
            <h3 className='mt-8 font-semibold text-lg text-[16.5px] text-[rgb(19,40,126)]'>{title}</h3>
            <p className='mt-3 text-[14.7px] leading-7 text-center text-[rgb(129,135,150)]'>{desc}</p>
            <Link>
                <span className='mt-5 inline-block text-[rgb(60,146,255)]'>Read More</span>
                <i className='fa-solid fa-right-long ml-2 text-sm text-[rgb(60,146,255)]'></i>
            </Link>
        </div>
    );
}

export default Service;
