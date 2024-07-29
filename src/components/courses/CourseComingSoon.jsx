import React from 'react';
import { Link } from 'react-router-dom';

const CourseComingSoonCard = () => {
    return (
        <div>
            <div className="xl:p-6 lg-custom:p-4 lg:p-3 p-6 lg-custom:h-60 lg:h-[280px] md:h-64 sm:h-72 2xs-custom:h-60 2xs:h-72 h-80 flex justify-center items-center bg-[rgb(0,30,200)] text-white rounded-xl shadow-lg shadow-blue-300 overflow-hidden">
                <h3 className='text-[26px] tracking-wide text-center font-semibold'>More Courses Coming Soon!</h3>
            </div>
        </div>
    );
};

export default CourseComingSoonCard;
