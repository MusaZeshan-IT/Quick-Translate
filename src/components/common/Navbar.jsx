import React from 'react';
import { useLocation } from 'react-router-dom';
import NavHero from '../Home/NavHero';
import Hero from '../shared/Hero/Hero';

const Navbar = ({ bgImgUrl, pageName }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {currentPath === "/" ? (
                <NavHero />
            ) : (
                <Hero pageName={pageName} bgImgUrl={bgImgUrl} />
            )}
        </>
    );
};

export default Navbar;