import React from 'react';

const Lang = ({ imgUrl, title, desc }) => {
    return (
        <div className='flex gap-x-8'>
            <img className='h-12 w-16 shadow-[0px_0px_16px_rgba(0,0,0,0.15)]' src={imgUrl} alt="" />
            <div>
                <h3 className='text-[rgb(19,40,126)] font-semibold text-[16.5px] tracking-wide'>{title}</h3>
                <p className='w-[250px] text-[rgb(129,135,150)] text-[15px] leading-6 mt-2'>{desc}</p>
            </div>
        </div>
    );
}

export default Lang;
