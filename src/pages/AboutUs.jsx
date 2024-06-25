import React from 'react';
import Hero from '../components/shared/Hero/Hero';
import CoreServices from '../components/shared/CoreServices';
import ServicesBgImage from '../assets/heroImages/services-hero-bg.jpeg';
import Cover from '../components/shared/Cover';
import CoveredLangs from '../components/shared/CoveredLangs';
import UniqueFeatures from '../components/UniqueFeatures';
import HowItWorks from '../components/HowItWorks';

const AboutUs = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <Hero pageName='About Us' bgImgUrl={ServicesBgImage} />
            <div className='flex flex-col gap-y-24 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <UniqueFeatures />
                <HowItWorks />
            </div>
        </div>
    );
}

export default AboutUs;
