import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../common/Navbar';

const Hero = ({ pageName = "Unknown", bgImgUrl }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImgUrl})` }} className="relative text-white h-[400px] w-full hero-cont bg-center bg-cover"> {/* Apply hero-cont here */}
            <div className="absolute inset-0 bg-[rgba(0,27,136,0.8)] bg-opacity-70 h-full"></div> {/* Blue overlay */}
            <div className="relative inset-0 w-full h-full 2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8">
                <Navbar />
                <div className='mt-[115px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] font-semibold tracking-wider'>{pageName}</h1>
                    <div className='flex mt-4'>
                        <Link to="/">
                            <h2 className='text-[13px] font-meidum tracking-wide'>HOME</h2>
                        </Link>
                        <span className='text-gray-400 text-[13px] mx-2'>/</span>
                        <h2 className='text-[13px] font-meidum tracking-wide'>{pageName.toLocaleUpperCase()}</h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;
