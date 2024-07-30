import React from 'react';
import CoursesBgImage from '../assets/heroImages/courses-hero-bg.jpg';
import Navbar from '../components/common/Navbar';
import CourseCard from '../components/courses/CourseCard';
import CourseComingSoonCard from '../components/courses/CourseComingSoon';
import CourseList from '../helpers/CourseList';

const Courses = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-28'>
            <Navbar pageName='Courses' bgImgUrl={CoursesBgImage} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <div className='font-bold tracking-wide'>
                            <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Our Courses</h3>
                            <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Discover Our Learning Paths</h2>
                        </div>
                        <p className='text-center sm:w-[610px] w-full mt-5 leading-8 text-[rgb(129,135,150)]'>We offer a wide range of services to help you achieve your goals. We are committed to providing you with the best possible service.</p>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl-custom:gap-10 xl:gap-8 lg:gap-5 md:gap-7 gap-6 mt-16'>
                        {CourseList.map((course) => (
                            <CourseCard key={course.id} urlName={course.urlName} title={course.title} description={course.desc} duration={course.duration} medium={course.medium} courseFee={course.courseFee} instructor={course.instructor} />
                        ))}
                        <CourseComingSoonCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
