import React from 'react';
import FaqBgImage from '../assets/heroImages/faq-hero-bg.jpg';
import Navbar from '../components/common/Navbar';
import FaqQuestions from '../components/faq/FaqQuestions';

const Faq = () => {
    return (
        <div className='flex flex-col gap-y-24 pb-20'>
            <Navbar pageName='Faq' pageTitle='FAQ Questions' bgImgUrl={FaqBgImage} />
            <div className='2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <FaqQuestions />
            </div>
        </div>
    );
}

export default Faq;
