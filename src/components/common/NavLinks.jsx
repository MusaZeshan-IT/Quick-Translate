import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { NavMenuContext } from '../../context/NavMenuContext';

const NavLinks = () => {
    const { handleOpenNavMenu } = useContext(NavMenuContext);

    return (
        <nav>
            <div className='h-20 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='xs:h-[44px] 2xs-custom:h-[40px] h-[36px] me-2 rounded-[50%]' src={Logo} alt="" />
                    <h2 className='xs:text-[24px] 2xs-custom:text-[22px] text-xl font-semibold tracking-wide'>Quick Translate</h2>
                </div>
                <div className='flex items-center lg-custom:gap-x-14 lg:gap-x-10 gap-x-5'>
                    <div className='lg:flex hidden lg-custom:gap-x-8 gap-x-6 text-sm font-semibold tracking-[1.8px]'>
                        <span className='hover:text-yellow-400'>
                            <Link to="/">Home</Link>
                        </span>
                        <span className='hover:text-yellow-400'>
                            <Link to="/about-us">About Us</Link>
                        </span>
                        <span className='hover:text-yellow-400'>
                            <Link to="/services">Services</Link>
                        </span>
                        <span className='hover:text-yellow-400'>
                            <Link to="/faq">FAQ</Link>
                        </span>
                        <span className='hover:text-yellow-400'>
                            <Link to="/blog">Blog</Link>
                        </span>
                    </div>
                    <Link to="/contact">
                        <button className='lg:block hidden hover:bg-indigo-600 hover:border-none rounded-md border tracking-[1.5px] font-semibold text-xs border-white bg-blue-500 px-5 py-[10px]'>CONTACT US</button>
                    </Link>
                    <button className='lg:hidden flex justify-center items-center xs:w-10 xs:h-10 2xs-custom:h-9 2xs-custom:w-9 h-8 w-8 bg-[rgb(8,19,39)] rounded-[50%]' onClick={handleOpenNavMenu}>
                        <i className='fa-solid fa-bars xs:text-base 2xs-custom:text-[15px] text-sm'></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;
