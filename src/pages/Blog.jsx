import React from 'react';
import Navbar from '../components/common/Navbar';
import BlogBgImage from '../assets/heroImages/blog-hero-bg.jpg';
import BlogPosts from '../components/blog/BlogPosts';

const Blog = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-28'>
            <Navbar pageName='Blog' bgImgUrl={BlogBgImage} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <BlogPosts />
            </div>
        </div>
    );
}

export default Blog;
