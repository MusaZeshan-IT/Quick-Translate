import React from 'react';

const Feature = ({ imgUrl, title, desc }) => {
    return (
        <div className='flex gap-4'>
            <img className='h-12 w-12' src={imgUrl} alt="" />
            <div>
                <h3 className='tracking-wide text-lg text-[rgb(19,40,126)] font-semibold'>{title}</h3>
                <p className='text-[rgb(129,135,150)] text-[14.5px] leading-6 mt-1'>{desc}</p>
            </div>
        </div>
    );
}

export default Feature;
