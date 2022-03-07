import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Navbar(){

    const {theme} = useContext(ThemeContext)
    
    return(
        <nav className={`navbar--${theme}`}>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </nav>
    )
}