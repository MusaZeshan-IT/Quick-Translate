import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, duration, description, medium, courseFee }) => {
    return (
        <div>
            <Link to={`/courses/${title}`}>
                <div className="p-6 flex flex-col justify-center bg-[rgb(0,30,200)] text-white rounded-xl shadow-lg shadow-blue-300 overflow-hidden">
                    <div className='flex gap-x-4'>
                        <div>
                            <i className='fa-regular fa-clock'></i>
                            <span className='ms-[5px]'>{duration}</span>
                        </div>
                        <div>
                            <p>Via: {medium}</p>
                        </div>
                    </div>
                    <h2 className="text-[21px] mt-3 font-bold mb-1 tracking-[0.6px]">{title}</h2>
                    <p className='tracking-[0.15px] text-[15.5px]'>{description}</p>
                    <p className='text-[16px] font-semibold tracking-wide mt-6'><span className='text-[16.5px] tracking-wider'>Enrollment Fee:</span> {courseFee}</p>
                </div>
            </Link>
        </div>
    );
};

export default CourseCard;
