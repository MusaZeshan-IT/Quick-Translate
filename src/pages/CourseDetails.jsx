import React from 'react';
import Navbar from '../components/common/Navbar';
import CourseDetailsBgImage from '../assets/heroImages/courses-details-hero-bg.jpg';
import CourseList from '../helpers/CourseList';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';
import CourseDetailsCard from '../components/course-details/CourseDetailsCard';

const CourseDetails = () => {
    const { courseUrlName } = useParams();
    const course = CourseList.find((course) => course.urlName === courseUrlName);

    // If course does not exist, render the Error404 component
    if (!course) {
        return <Error404 />;
    }

    const objectivesArray = Object.values(course.objectives);

    return (
        <div className='flex flex-col gap-y-24 pb-28'>
            <Navbar isPrevPage={true} previousPageName='course' pageName='Course Details' bgImgUrl={CourseDetailsBgImage} />
            <div className='bg-gray-50 py-16'>
                <div className='flex lg:flex-row flex-col gap-y-20 2xl:gap-x-32 xl-custom:gap-x-20 xl:gap-x-16 lg-custom:gap-x-14 lg:gap-x-12 gap-x-10 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 2xs-custom:px-8 px-6'>
                    <div>
                        <h1 className='xs-custom:text-[34px] xs:text-[31px] text-[29px] font-bold tracking-wide'>{course.title}</h1>
                        <p className='text-[17px] leading-7 mt-2'>{course.fullDesc}</p>
                        <div className='flex flex-wrap items-center gap-4 mt-5'>
                            <div className='flex items-center'>
                                <i className='fa-solid fa-chalkboard-user text-blue-900 text-[19px] me-2'></i>
                                <span className='text-[16px] font-semibold tracking-wide'>Instructor: {course.instructor}</span>
                            </div>
                            <div className='flex items-center'>
                                <i className='fa-solid fa-language text-blue-900 text-[19px] me-2'></i>
                                <span className='text-[16px] font-semibold tracking-wide'>Taught in English</span>
                            </div>
                            <div className='flex items-center'>
                                <i className='fa-solid fa-users text-blue-900 text-[19px] me-2'></i>
                                <span className='text-[16px] font-semibold tracking-wide'>0 already enrolled</span>
                            </div>
                        </div>
                        <p className='text-[14px] mt-2 text-gray-600 tracking-wide'>This course is starting at {course.scheduledOn}.</p>
                        <button className='bg-[rgb(50,50,255)] hover:bg-blue-600 text-[16px] text-white font-semibold px-6 py-[9px] rounded-[4px] mt-8 tracking-wide'>Enroll Now</button>
                    </div>
                    <div>
                        <CourseDetailsCard course={course} />
                    </div>
                </div>
            </div>
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 2xs-custom:px-8 px-6'>
                <h2 className='text-3xl font-bold text-center'>What You'll Learn</h2>
                <p className='text-center mx-auto text-[rgb(99,104,116)] xs:text-[16px] text-[15px] leading-7 mt-3 xs:w-[450px]'>{course.desc}</p>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-14 xl:gap-x-20 lg-custom:gap-x-16 gap-x-14'>
                    {objectivesArray.map((objective, index) => (
                        <div key={index} className='flex items-start gap-x-4'>
                            <i className='fa-solid text-lg fa-circle-check text-blue-700'></i>
                            <p>{objective}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
