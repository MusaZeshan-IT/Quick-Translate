import React from 'react';
import Hero from '../components/shared/Hero';
import AboutBgImage from '../assets/heroImages/about-hero-bg.jpeg';
import UniqueFeatures from '../components/UniqueFeatures';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/common/Navbar';

const AboutUs = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <Navbar pageName='About Us' bgImgUrl={AboutBgImage} />
            <div className='flex flex-col gap-y-24 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <UniqueFeatures />
                <HowItWorks />
            </div>
        </div>
    );
}

export default AboutUs;
