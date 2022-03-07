import React,{useContext} from "react";
import { ThemeContext } from "./themeContext";

export default function Foot(){

    const {theme} = useContext(ThemeContext)

    return(
        <div className={`foot--${theme}`}>
            <div>Footer Alert</div>
        </div>
    )
}