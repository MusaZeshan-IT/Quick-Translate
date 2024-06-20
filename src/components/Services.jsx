import React from 'react';
import Service from './Service';
import S1 from '../assets/services/s1.png';
import S2 from '../assets/services/s2.png';
import S3 from '../assets/services/s3.png';
import S4 from '../assets/services/s4.png';
import S5 from '../assets/services/s5.png';
import S6 from '../assets/services/s6.png';

const Services = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <div className='font-bold tracking-wide'>
                    <h3 className='text-center text-[16.5px] text-[rgb(60,146,255)]'>Our Services</h3>
                    <h2 className='mt-3 text-3xl text-center text-[rgb(19,40,126)]'>Our Core Services</h2>
                </div>
                <p className='text-center w-[610px] mt-5 leading-8 text-[rgb(129,135,150)]'>We offer a wide range of services to help you achieve your goals. We are committed to providing you with the best possible service.</p>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-16'>
                <Service
                    imgUrl={S1}
                    title='Documents Translation'
                    desc='Delivering precise and culturally nuanced document translations to meet all your global communication needs.'
                />
                <Service
                    imgUrl={S6}
                    title='Interpreting Services'
                    desc='Our team of experienced professionals offer you the best interpreting services that are unmatched.'
                />
                <Service
                    imgUrl={S3}
                    title='Localization Services'
                    desc='Expertly adapting your content for diverse global markets with our top-tier Localization Services.'
                />
                <Service
                    imgUrl={S4}
                    title='Website Translation'
                    desc='Accurately translating your website to effectively reach and engage diverse global audiences online.'
                />
                <Service
                    imgUrl={S5}
                    title='Personal Translation'
                    desc='Tailored personal document translation services for your individual needs, with precision and confidentiality.'
                />
                <Service
                    imgUrl={S2}
                    title='Apostile & Legalization'
                    desc='Effortlessly ensuring your documents meet international standards with our expert Apostille & Legalization services.'
                />
            </div>
        </div>
    );
}

export default Services;
