import React from 'react';
import Handshake from '../../assets/handshake.jpg'

const Cover = () => {
    return (
        <div className='w-full h-[650px] relative' style={{ backgroundImage: `url(${Handshake})` }}>
            <div className='inset-0 flex flex-col items-center justify-center w-full h-full absolute bg-[rgba(18,57,212,0.7)]'>
                <i className="text-[rgb(255,219,62)] fa-solid fa-shield-halved text-6xl"></i>
                <h1 className='mt-8 text-white text-center leading-[60px] text-[50px] w-[650px] font-black'>Bound To Give You Prosperity & Confidence</h1>
                <p className='text-white w-[700px] text-center mt-8 leading-8'>We make sure that none of our customers go back unsatisfied from our services. It is our duty to ensure you are happy with our services.</p>
            </div>
        </div>
    );
}

export default Cover;
