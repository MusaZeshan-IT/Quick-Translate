import React from 'react';
import Hero from '../components/shared/Hero';
import ErrorHero from '../components/Error404/ErrorHero';
import ErrorHeroBg from '../assets/heroImages/error-hero-bg.jpg';

const Error404 = () => {
    return (
        <div className='flex flex-col gap-y-24 bg-gray-100'>
            <ErrorHero bgImgUrl={ErrorHeroBg}/>
        </div>
    );
}

export default Error404;
