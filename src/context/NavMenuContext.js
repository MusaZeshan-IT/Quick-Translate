import React, { createContext, useState } from "react";

// Creating the context
export const NavMenuContext = createContext()

// Creating the provider
export const NavMenuProvider = ({ children }) => {
    // Setting the state and their default values
    const [showNavMenu, setShowNavMenu] = useState(false);

    const handleOpenNavMenu = () => setShowNavMenu(true);
    const handleCloseNavMenu = () => setShowNavMenu(false);

    return (
        <NavMenuContext.Provider value={{ showNavMenu, setShowNavMenu }}>
            {children}
        </NavMenuContext.Provider>
    )
}