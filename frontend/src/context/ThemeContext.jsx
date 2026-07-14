import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // Options: 'theme-yellow', 'theme-blue', 'theme-green'
    const [colorTheme, setColorTheme] = useState('theme-yellow');

    useEffect(() => {
        // Manage dark mode class
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Manage color theme class
        document.body.classList.remove('theme-yellow', 'theme-blue', 'theme-green');
        document.body.classList.add(colorTheme);

    }, [isDarkMode, colorTheme]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);
    const changeColorTheme = (theme) => setColorTheme(theme);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colorTheme, changeColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
