import React, {useContext} from "react";
import { ThemeContext } from "./themeContext";

export default function Main(){

    const {theme, changeTheme} = useContext(ThemeContext)

    return(
        <div className={`main--wrapper--${theme}`}>
            <div className={`main--text--${theme}`}>
                Click below to change theme
            </div>
            <button onClick={changeTheme} className={`main--button--${theme}`}>Change Theme</button>
        </div>
    )
}