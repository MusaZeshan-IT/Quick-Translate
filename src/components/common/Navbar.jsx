import React from 'react';
import { useLocation } from 'react-router-dom';
import NavHero from '../Home/NavHero';
import Hero from '../shared/Hero';

const Navbar = ({ bgImgUrl, pageName, pageTitle }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {currentPath === "/" ? (
                <NavHero />
            ) : (
                <Hero pageName={pageName} pageTitle={pageTitle} bgImgUrl={bgImgUrl} />
            )}
        </>
    );
};

export default Navbar;