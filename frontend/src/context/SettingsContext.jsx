import { createContext, useState } from "react";

export const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {
    const [showPrompts, setShowPrompts] = useState(true);
    const [showAffirmations, setShowAffirmations] = useState(true);

    const togglePrompts = () => setShowPrompts(prev => !prev);
    const toggleAffirmations = () => setShowAffirmations(prev => !prev);

    return (
        <SettingsContext.Provider value={{ showPrompts, togglePrompts, showAffirmations, toggleAffirmations }}>
            {children}
        </SettingsContext.Provider>
    );
};
