import React from 'react';
import { useLocation } from 'react-router-dom';
import NavHero from '../Home/NavHero';
import Hero from '../shared/Hero';

const Navbar = ({ bgImgUrl, pageName, pageTitle, previousPageName, isPrevPage }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {currentPath === "/" ? (
                <NavHero />
            ) : (
                <Hero previousPageName={previousPageName} isPrevPage={isPrevPage} pageName={pageName} pageTitle={pageTitle} bgImgUrl={bgImgUrl} />
            )}
        </>
    );
};

export default Navbar;