import React from 'react';
import BlogCard from './BlogCard';
import BlogList from '../../helpers/BlogList';

const BlogPosts = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <div className='font-bold tracking-wide'>
                    <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Our Blog</h3>
                    <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Blog Posts & Insights</h2>
                </div>
                <p className='text-center sm:w-[610px] w-full mt-5 leading-8 text-[rgb(129,135,150)]'>
                    Our blogs are written by our team of experts which contain high quality content, information and insights. Check out our posts below.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-x-12 xl-custom:gap-x-10 xl:gap-x-9 lg-custom:gap-x-8 gap-x-7 gap-y-10 mt-16'>
                {BlogList.map((blog) => (
                    <BlogCard key={blog.id} blogId={blog.id} blogDesc={blog.desc} blogImg={blog.img} blogTitle={blog.title} blogReleaseDate={blog.releaseDate} />
                ))}
            </div>
        </div>
    );
}

export default BlogPosts;
