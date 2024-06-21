import React from 'react';
import Handshake from '../../assets/handshake.jpg'

const Cover = () => {
    return (
        <div className='w-full h-[650px] relative' style={{ backgroundImage: `url(${Handshake})` }}>
            <div className='inset-0 flex flex-col items-center justify-center w-full h-full absolute bg-[rgba(18,57,212,0.7)]'>
                <i className="text-[rgb(255,219,62)] fa-solid fa-shield-halved text-6xl"></i>
                <h1 className='mt-8 text-white text-center sm:leading-[60px] xs:leading-[50px] leading-[45px] md:text-[55px] sm:text-[48px] xs:text-[38px] 2xs-custom:text-[32px] text-[28px] sm-custom:w-[690px] font-black'>
                    Bound To Give You
                    <br />
                    Prosperity & Confidence
                </h1>
                <p className='text-white md:w-[700px] sm:text-base 2xs-custom:text-[15px] text-[14px] w-full text-center sm:mt-8 mt-6 leading-8'>We make sure that none of our customers go back unsatisfied from our services. It is our duty to ensure you are happy with our services.</p>
            </div>
        </div>
    );
}

export default Cover;
