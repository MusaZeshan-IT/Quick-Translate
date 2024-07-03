import React from 'react';

const BlogCard = ({ blogTitle, blogDesc, blogImg, blogReleaseDate }) => {
    return (
        <div className='w-full'>
            <img className='rounded-lg shadow-md shadow-gray-200 md:h-60 xs-custom:h-80 h-60 w-full' src={blogImg} alt="" />
            <h3 className='2xs-custom:text-[19px] 2xs:text-lg text-[17.6px] mt-4 2xs:tracking-wide tracking-[0.006em] text-gray-950 font-semibold'>{blogTitle}</h3>
            <div className='flex text-gray-400 mt-2'>
                <i className='fa-regular text-sm fa-calendar'></i>
                <p className='ml-2 text-sm tracking-[0.3px]'>{blogReleaseDate}</p>
            </div>
            <p className='text-[15px] text-gray-400 mt-3 tracking-[0.3px] leading-6'>{blogDesc}</p>
        </div>
    );
}

export default BlogCard;
