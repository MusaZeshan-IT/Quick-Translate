import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { NavMenuContext } from '../../context/NavMenuContext';

const NavMenu = () => {
    const { showNavMenu, handleCloseNavMenu } = useContext(NavMenuContext);

    useEffect(() => {
        if (showNavMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showNavMenu]);

    if (!showNavMenu) {
        return null;
    }

    return (
        <div className='overflow-y-auto lg:hidden block z-20 fixed inset-0 bg-black bg-opacity-50 h-full w-full'>
            <div className='bg-[rgb(0,43,107)] 2xs:w-[360px] w-full flex md-custom:p-7 md:p-6 sm-custom:p-5 p-4 justify-between'>
                <div className='w-10/12'>
                    <nav className='flex flex-col justify-center py-5 tracking-wider'>
                        <img className='h-[75px] w-[75px] rounded-[50%] mb-12' src={Logo} alt="" />
                        <div className='ms-3 grid text-white gap-y-8 text-[23px] font-semibold'>
                            <Link to="/">
                                <button onClick={handleCloseNavMenu} type='button'>
                                    <i className='fa-solid fa-house text-2xl me-2'></i>
                                    HOME
                                </button>
                            </Link>
                            <Link to="/about-us">
                                <button onClick={handleCloseNavMenu} type='button'>
                                    <i className='fa-solid fa-users text-2xl me-2'></i>
                                    ABOUT US
                                </button>
                            </Link>
                            <Link to="/services">
                                <button onClick={handleCloseNavMenu} type='button'>
                                    <i className='fa-solid fa-headset text-2xl me-2'></i>
                                    SERVICES
                                </button>
                            </Link>
                            <Link to="/blog">
                                <button onClick={handleCloseNavMenu} type='button'>
                                    <i className='fa-solid fa-newspaper text-2xl me-2'></i>
                                    BLOG
                                </button>
                            </Link>
                            <Link to="/faq">
                                <button onClick={handleCloseNavMenu} type='button'>
                                    <i className='fa-regular fa-circle-question text-2xl me-2'></i>
                                    FAQ
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button onClick={handleCloseNavMenu} className='bg-[rgb(20,20,20)] mt-8 hover:bg-black text-white px-6 py-3 rounded-md text-lg' type="button">CONTACT US</button>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className='w-2/12 ms-16 h-full'>
                    <div className='mt-[34px] rounded-lg flex justify-center items-center bg-[rgb(4,0,50)] h-9 w-9 p-2'>
                        <i className='fa-solid fa-xmark text-2xl cursor-pointer text-[rgb(234,242,255)]' onClick={handleCloseNavMenu}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
