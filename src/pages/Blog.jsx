import React from 'react';
import Navbar from '../components/common/Navbar';
import BlogBgImage from '../assets/heroImages/blog-hero-bg.jpg';

const Blog = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <Navbar pageName='Blog' pageTitle='BLOG' bgImgUrl={BlogBgImage} />
        </div>
    );
}

export default Blog;
