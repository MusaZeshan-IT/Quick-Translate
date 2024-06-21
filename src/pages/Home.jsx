import React from 'react';
import NavHero from '../components/Home/NavHero';
import HowItWorks from '../components/HowItWorks';
import UniqueFeatures from '../components/UniqueFeatures';
import Cover from '../components/shared/Cover';
import CoveredLangs from '../components/shared/CoveredLangs';
import Services from '../components/shared/Services';

const Home = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <NavHero />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8 flex flex-col gap-y-24'>
                <HowItWorks />
                <UniqueFeatures />
            </div>
            <Cover />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8 flex flex-col gap-y-24'>
                <CoveredLangs />
                <Services />
            </div>
        </div>
    );
}

export default Home;
