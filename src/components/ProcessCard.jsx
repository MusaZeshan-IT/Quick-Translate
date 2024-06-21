import React from 'react';

const ProcessCard = ({ imgUrl, title, desc, stepNum }) => {
    return (
        <div className='h-[240px] shadow-[0px_0px_16px_rgba(0,0,0,0.15)] rounded-sm bg-[rgb(254,254,254)]'>
            <div className='flex items-center ps-3 bg-blue-500 rounded-ss-sm rounded-ee-3xl w-12 h-12 text-white text-lg'>{stepNum}</div>
            <div className='px-4 flex flex-col gap-y-2 items-center relative bottom-3'>
                <img className='lg:h-16 lg:w-16 md:h-20 md:w-20 sm:h-16 sm:w-16 h-[70px] w-[70px]' src={imgUrl} alt="" />
                <h3 className='tracking-wide sm:mt-2 mt-4 text-[rgb(19,40,126)] lg:text-lg md:text-xl sm:text-lg text-xl font-semibold'>{title}</h3>
                <p className='lg:text-[15.5px] md:text-[16.8px] sm:text-[15.5px] text-base leading-[25px] text-center text-[rgb(129,135,150)]'>{desc}</p>
            </div>
        </div>
    );
}

export default ProcessCard;
