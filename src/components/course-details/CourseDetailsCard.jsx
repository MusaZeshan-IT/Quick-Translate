import React from 'react';

const CourseDetailsCard = ({ course }) => {

    function courseDays() {
        courseDays = ""
        for (let i = 0; i < course.days.length; i++) {
            if (i === course.days.length - 1) {
                courseDays += course.days[i]
            }
            else {
                courseDays += course.days[i] + ", ";
            }
        }
        return courseDays
    }

    return (
        <div className='lg:w-[420px] w-full tracking-wide 2xs-custom:h-[400px] h-full shadow-[0px_0px_20px_rgba(0,0,0,0.2)] xs:p-8 2xs-custom:p-6 2xs:p-4 p-3 bg-white rounded-xl'>
            <h2 className='text-lg font-semibold tracking-wide'>Course</h2>
            <p className='text-[12.5px] mt-1 tracking-wide text-gray-600'>Learn the "{course.title}" in this course.</p>
            <div className='border-b-2 my-3'></div>
            <div>
                <p className='text-[16px] font-semibold mt-3'>Beginner Level</p>
                <p className='text-[12.5px] mt-[2px] text-gray-600'>Recommended Experience <i className='fa-solid text-sm text-blue-700 fa-info-circle'></i></p>
            </div>
            <p className='text-base mt-4'><i className='fa-regular text-base text-blue-800 fa-clock'></i> {course.timeOfDay}</p>
            <div className='mt-2'>
                <i className='fa-solid text-base text-blue-800 fa-calendar-week'></i>
                <span> {courseDays()}</span>
            </div>
            <div className='mt-2'>
                <i className='fa-solid text-base text-blue-800 fa-earth-americas'></i>
                <span> Online <span className='text-sm'>(</span>Zoom<span className='text-sm'>)</span></span>
            </div>
            <p><i className='fa-solid mt-2 text-base text-blue-800 fa-calendar-days'></i> {course.duration}</p>
            <button className='w-full cursor-pointer hover:bg-blue-600 bg-[rgb(50,50,255)] text-white font-semibold px-6 py-3 rounded-md mt-7'>Enroll Now at ${course.courseFee}</button>
        </div>
    );
}

export default CourseDetailsCard;
