import React from 'react';
import Navbar from '../components/common/Navbar';
import BlogDetailsBgImage from '../assets/heroImages/blog-details-hero-bg.jpg';
import PostDetailsCard from '../components/blog-details/PostDetailsCard';
import { useParams } from 'react-router-dom';
import BlogList from '../helpers/BlogList';

const BlogDetails = () => {
    const { blogId } = useParams();
    const blog = BlogList.find((blog) => blog.id === Number(blogId));

    return (
        <div className='flex flex-col gap-y-24 pb-28 bg-gray-100'>
            <Navbar isPrevPage={true} previousPageName='blog' pageName='Blog Details' bgImgUrl={BlogDetailsBgImage} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 2xs-custom:px-8 px-6'>
                <PostDetailsCard blog={blog}/>
            </div>
        </div>
    );
}

export default BlogDetails;
