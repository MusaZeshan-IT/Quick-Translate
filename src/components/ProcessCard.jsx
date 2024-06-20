import React from 'react';

const ProcessCard = ({ imgUrl, title, desc, stepNum }) => {
    return (
        <div className='h-[220px] w-[250px] shadow-[0px_0px_16px_rgba(0,0,0,0.15)] rounded-sm bg-[rgb(254,254,254)]'>
            <div className='flex items-center ps-3 bg-blue-500 rounded-ss-sm rounded-ee-3xl w-12 h-12 text-white text-lg'>{stepNum}</div>
            <div className='px-4 flex flex-col gap-y-2 items-center relative bottom-3'>
                <img className='h-16 w-16' src={imgUrl} alt="" />
                <h3 className='tracking-wide mt-2 text-[rgb(19,40,126)] text-lg font-semibold'>{title}</h3>
                <p className='text-[15.5px] leading-[25px] text-center text-[rgb(129,135,150)]'>{desc}</p>
            </div>
        </div>
    );
}

export default ProcessCard;
