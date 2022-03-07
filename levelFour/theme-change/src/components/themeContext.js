import React from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [theme, setTheme] = React.useState("light")

    function changeTheme(){
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    return(
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}