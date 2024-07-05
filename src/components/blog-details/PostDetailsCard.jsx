import React from 'react';
import BlogList from '../../helpers/BlogList';
import { Link } from 'react-router-dom';

const PostDetailsCard = ({ blog }) => {
    const author = blog.author;
    const authorCaptilized = author.toUpperCase();
    const bestBlogs = BlogList.filter((bestblog) => bestblog.rating >= 4 && bestblog.id !== blog.id).slice(0, 3);

    return (
        <div className='flex lg:flex-row flex-col lg:gap-x-8 gap-y-16'>
            <div className='lg:w-3/4 bg-white shadow-[0px_0px_16px_rgba(0,0,0,0.3)] rounded-lg'>
                <img className='lg:h-[500px] md:h-[450px] sm:h-96 xs:h-80 h-64 w-full rounded-t-lg' src={blog.img} alt="" />
                <div className='sm:p-8 xs:p-6 2xs-custom:p-4 px-3 py-5'>
                    <div className='flex'>
                        <div className='font-semibold tracking-wide xs-custom:text-sm 2xs:text-[13px] text-[12px]'>
                            <span className='text-gray-400'>BY</span>
                            <span className='sm:ms-[5px] ms-[4.5px] text-blue-900'>{authorCaptilized}</span>
                        </div>
                        <p className='sm:ms-8 xs:ms-6 ms-4 2xs:text-[13px] text-[12px] font-semibold tracking-wide xs-custom:text-sm text-blue-900'>{blog.releaseDate}</p>
                    </div>
                    <h1 className='xs-custom:text-3xl xs-custom:leading-10 xs:leading-9 2xs:leading-8 leading-7 xs:text-[26px] 2xs-custom:text-[24px] 2xs:text-[22px] text-[20px] text-blue-950 font-semibold xs-custom:mt-6 mt-4'>{blog.title}</h1>
                    <p className='text-[rgb(163,163,163)] xs-custom:text-[16px] 2xs:text-[15px] text-[14px] xs-custom:leading-[29px] 2xs:leading-[27px] leading-[25px] mt-6'>{blog.fullDesc.para1}</p>
                    <p className='text-[rgb(163,163,163)] xs-custom:text-[16px] 2xs:text-[15px] text-[14px] xs-custom:leading-[29px] 2xs:leading-[27px] leading-[25px] mt-6'>{blog.fullDesc.para2}</p>
                    <p className='text-[rgb(163,163,163)] xs-custom:text-[16px] 2xs:text-[15px] text-[14px] xs-custom:leading-[29px] 2xs:leading-[27px] leading-[25px] mt-6'>{blog.fullDesc.para3}</p>
                </div>
            </div>
            <div className='lg:w-1/4'>
                <p className='text-[rgb(7,25,156)] font-semibold tracking-wide text-[19px] border-b-2 pb-1 border-blue-500'>Don't Miss</p>
                <div className='grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-8 md-custom:gap-x-8 md:gap-x-6 gap-x-6 gap-y-7 mt-7'>
                    {bestBlogs.map((blog) => (
                        <div key={blog.id} className='w-full'>
                            <Link to={`/blog/${blog.id}`}>
                                <img className='sm:h-44 xs:h-60 2xs-custom:h-52 h-44 shadow-md shadow-gray-300 rounded-[4px] w-full' src={blog.img} alt="" />
                                <h3 className='text-blue-800 sm:text-base xs-custom:text-lg mt-3 leading-[22px] hover:text-blue-600 transition-colors duration-100 ease-in cursor-pointer'>{blog.title}</h3>
                            </Link>
                            <p className='text-gray-400 sm:text-sm xs-custom:text-base text-sm mt-1'>{blog.releaseDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostDetailsCard;
