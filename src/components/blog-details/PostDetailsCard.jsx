import React from 'react';
import BlogList from '../../helpers/BlogList';
import { Link } from 'react-router-dom';

const PostDetailsCard = ({ blog }) => {
    const author = blog.author;
    const authorCaptilized = author.toUpperCase();
    const bestBlogs = BlogList.filter((bestblog) => bestblog.rating >= 4 && bestblog.id !== blog.id).slice(0, 3);

    return (
        <div className='flex flex-row gap-x-8'>
            <div className='w-3/4 shadow-[0px_0px_16px_rgba(0,0,0,0.3)] rounded-lg'>
                <img className='h-[500px] w-full rounded-t-lg' src={blog.img} alt="" />
                <div>
                    <div className='font-semibold tracking-widest'>
                        <span className='text-gray-400'>BY</span>
                        <span className='ms-[5px] text-[rgb(25,32,87)]'>{authorCaptilized}</span>
                    </div>
                </div>
            </div>
            <div className='w-1/4'>
                <p className='text-[rgb(7,25,156)] font-semibold tracking-wide text-[19px] border-b-2 pb-1 border-blue-500'>Don't Miss</p>
                {bestBlogs.map((blog) => (
                    <div key={blog.id} className='mt-7'>
                        <Link to={`/blog/${blog.id}`}>
                        <img className='h-44 shadow-md shadow-gray-300 rounded-[4px] w-full' src={blog.img} alt="" srcset="" />
                            <h3 className='text-blue-800 mt-3 leading-[22px] hover:text-blue-600 transition-colors duration-100 ease-in cursor-pointer'>{blog.title}</h3>
                        </Link>
                        <p className='text-gray-400 text-sm mt-1'>{blog.releaseDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostDetailsCard;
