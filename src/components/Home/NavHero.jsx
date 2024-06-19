import React from 'react';
import HeroBgImage from '../../assets/heroImages/hero-bg.png';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const NavHero = () => {
    return (
        <div className='text-white px-28 h-[700px] w-full' style={{ backgroundImage: `url(${HeroBgImage})`, backgroundSize: 'cover' }}>
            <nav>
                <div className='h-20 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='h-[44px] me-2 rounded-[50%]' src={Logo} alt="" />
                        <h2 className='text-[24px] font-semibold tracking-wide'>Quick Translate</h2>
                    </div>
                    <div className='flex items-center gap-x-14'>
                        <div className='flex gap-x-8 text-sm font-semibold tracking-[1.8px]'>
                            <Link>Home</Link>
                            <Link>About Us</Link>
                            <Link>Services</Link>
                            <Link>FAQ</Link>
                            <Link>Blog</Link>
                        </div>
                        <button className='rounded-md border tracking-[1.5px] font-semibold text-xs border-white bg-blue-500 px-5 py-[10px]'>CONTACT US</button>
                    </div>
                </div>
                <div className='mt-24'>
                    <div className='flex items-center mb-8'>
                        <div className="me-2 inline-block w-8 h-[2px] bg-yellow-500"></div>
                        <h2 className='text-yellow-300 text-lg'>Professional Translations Agency</h2>
                    </div>
                    <h1 className='text-[55px] font-black w-[650px] leading-[70px]'>Now Order Professional Translations in Just a Few Easy Clicks</h1>
                    <p className='w-[600px] mt-8 leading-[30px] text-[17.8px]'>Our team of professional translators are here to help you translate your documents in just a few clicks. We ensure you get the best translation.</p>
                    <div className='flex gap-x-7 mt-8 text-[13px] font-semibold'>
                        <button className='bg-yellow-500 text-blue-950 rounded-lg py-3 px-5 tracking-[1.5px]'>CONTACT US</button>
                        <button className='bg-blue-500 rounded-lg py-3 px-5 tracking-[1.8px]'>LEARN MORE</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavHero;
