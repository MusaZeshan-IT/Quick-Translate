import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogTitle, blogDesc, blogImg, blogReleaseDate, blogId }) => {
    return (
        <div className='w-full'>
            <Link to={`/blog/${blogId}`}>
            <img className='rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:shadow-gray-300 shadow-gray-200 md:h-60 xs-custom:h-80 h-60 w-full mb-4' src={blogImg} alt="" />
            <h3 className='2xs-custom:text-[19px] inline hover:text-blue-700 transition-colors duration-100 ease-in cursor-pointer 2xs:text-lg text-[17.6px] 2xs:tracking-wide tracking-[0.006em] text-gray-950 font-semibold'>{blogTitle}</h3>
            </Link>
            <div className='flex text-gray-400 mt-2'>
                <i className='fa-regular text-sm fa-calendar'></i>
                <p className='ml-2 text-sm tracking-[0.3px]'>{blogReleaseDate}</p>
            </div>
            <p className='text-[15px] text-gray-400 mt-3 tracking-[0.3px] leading-6'>{blogDesc}</p>
        </div>
    );
}

export default BlogCard;
