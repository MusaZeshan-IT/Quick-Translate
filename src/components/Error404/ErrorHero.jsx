import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../common/NavLinks';

const Hero = ({ bgImgUrl }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImgUrl})` }} className="relative text-white h-[700px] w-full hero-cont bg-center bg-cover"> {/* Apply hero-cont here */}
            <div className="absolute inset-0 bg-[rgba(0,27,136,0.8)] bg-opacity-70 h-full"></div> {/* Blue overlay */}
            <div className="relative inset-0 w-full h-full 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8">
                <div className='mt-[115px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-[25px] font-semibold tracking-wider'>Page Not Found</h1>
                    <h1 className='text-[120px] font-black tracking-wider mt-12'>404</h1>
                    <p className='font-semibold text-xl tracking-wide text-center mt-7'>The page you are looking for does not exist.</p>
                    <Link to="/">
                        <button className='bg-yellow-500 font-bold hover:relative hover:bottom-1 mt-20 xs:text-lg text-[17px] hover:text-white hover:bg-yellow-600 text-blue-950 rounded-lg py-3 px-5 tracking-[1.5px]'>BACK TO HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
