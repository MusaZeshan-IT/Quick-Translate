import React from 'react';
import CoreServices from '../components/shared/CoreServices';
import ServicesBgImage from '../assets/heroImages/services-hero-bg.jpeg';
import Cover from '../components/shared/Cover';
import CoveredLangs from '../components/shared/CoveredLangs';
import Navbar from '../components/common/Navbar';

const Services = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-28'>
            <Navbar pageName='Services' bgImgUrl={ServicesBgImage} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <CoreServices />
            </div>
            <Cover />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <CoveredLangs />
            </div>
        </div>
    );
}

export default Services;
