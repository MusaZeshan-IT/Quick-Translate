import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const NavMenu = ({ showNavMenu, handleCloseNavMenu }) => {
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

    if (showNavMenu) {
        return (
            <div className='overflow-y-auto lg:hidden block z-20 fixed inset-0 bg-black bg-opacity-50 h-full w-full'>
                <div className='bg-white flex md-custom:p-10 md:p-9 sm-custom:p-8 sm:p-7 xs-custom:p-6 p-5 justify-between'>
                    <div>
                        <nav className='flex flex-col justify-center py-5 tracking-wider'>
                            <img className='h-20 w-48' src={Logo} alt="" />
                            <div className='sm:w-96 w-40 border-t-2 border-black ms-5 mb-14'>
                            </div>
                            <div className='ms-6 grid sm:grid-cols-2 gap-x-16 gap-y-8 text-2xl font-semibold'>
                                <Link to="/">HOME</Link>
                                <Link to="/clothes">CLOTHES</Link>
                                <Link to="/accessories">ACCESSORIES</Link>
                                <Link to="/appliances">APPLIANCES</Link>
                                <Link to="/loja-products">LOJA PRODUCTS</Link>
                                <Link to="">ABOUT US</Link>
                                <span className='sm-custom:hidden block'>
                                    <Link>CONTACT US</Link>
                                </span>
                                <span className='xs:hidden block'>
                                    <Link>LOGIN / REGISTER</Link>
                                </span>
                            </div >
                        </nav >
                    </div >
                    <div className='mt-8 rounded-[50%] flex justify-center items-center bg-black h-10 w-10 p-2'>
                        <i className='fa-solid fa-xmark text-3xl cursor-pointer text-white' onClick={() => handleCloseNavMenu()}></i>
                    </div>
                </div >
            </div >
        );
    } else {
        return null;
    }
}

export default NavMenu;
