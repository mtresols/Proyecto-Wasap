import { createContext, useState } from "react";

const ThemeContext = createContext()
const ThemeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    const changeToDarkMode = () => {
        setIsDark(true)
    }

    const changeToLightMode = () => {
        setIsDark(false)
    }
    /*Valores que seran accesibles desde todos los componentes hijos de nuestro contexto*/
    const providerValues = {
        isDark,
        toggleTheme,
        changeToDarkMode,
        changeToLightMode
    }

    return(
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
export {ThemeContext}