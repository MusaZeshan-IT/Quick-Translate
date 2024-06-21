import React from 'react';
import UniqueImg from '../assets/uniqueFeatures.jpeg'
import Feature from './Feature';
import Feature1 from '../assets/uniqueFeatures/quality1.png'
import Feature2 from '../assets/uniqueFeatures/quality2.png'
import Feature3 from '../assets/uniqueFeatures/quality3.png'

const UniqueFeatures = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-x-24 gap-y-16'>
            <div className='lg:w-1/2 w-full border-8 border-blue-500 h-[500px] mt-10'>
                <img className='h-[550px] lg:w-[500px] w-full relative bottom-10 left-10' src={UniqueImg} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h3 className='text-[rgb(60,146,255)] font-semibold text-[16.5px] tracking-wide'>High Professional Translation Agency</h3>
                <h2 className='text-[rgb(19,40,126)] text-3xl font-black mt-3 w-[500px] leading-10'>Order Professional Translations & Interpreting in Just a Few Clicks</h2>
                <p className='lg:mt-6 mt-4 text-[rgb(129,135,150)] leading-7'>Our team of professional translators and interpreters are ready to help you with any kind of translation. We have a team of translators who are well-trained and experienced.</p>
                <div className='flex flex-col lg:gap-y-7 gap-y-9 lg:mt-12 mt-10'>
                    <Feature
                        imgUrl={Feature1}
                        title="Fast & Competitive Prices"
                        desc="Experience fast, professional translations with competitive pricing that doesn't compromise on quality or accuracy."
                    />
                    <Feature
                        imgUrl={Feature2}
                        title="Worldwide Translation Service"
                        desc="Trust our expansive network of translators for accurate and reliable global communication, anytime, anywhere."
                    />
                    <Feature
                        imgUrl={Feature3}
                        title="Dedicated Professional Team"
                        desc="Partner with our committed and skilled professionals for personalized solutions and outstanding outcomes."
                    />
                </div>
            </div>
        </div>
    );
}

export default UniqueFeatures;
