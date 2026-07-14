import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const JournalContext = createContext(null);

export const JournalProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [entries, setEntries] = useState([]);

    const fetchEntries = async () => {
        try {
            const token = localStorage.getItem("moon_journal_token");
            if (!token) return setEntries([]);

            const res = await fetch("/api/entries", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await res.json();
            if (res.ok) {
                setEntries(data);
            }
        } catch (err) {
            console.error("Error fetching entries:", err);
        }
    };

    // Load entries specifically for the logged-in user
    useEffect(() => {
        if (user?.id) {
            fetchEntries();
        } else {
            setEntries([]);
        }
    }, [user?.id]);

    const addEntry = async (entry) => {
        try {
            const token = localStorage.getItem("moon_journal_token");
            const res = await fetch("/api/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(entry)
            });
            const data = await res.json();
            if (res.ok) {
                setEntries(prev => [data, ...prev]);
            }
        } catch (err) {
            console.error("Error adding entry:", err);
        }
    };

    const getAnalytics = () => {
        const now = new Date();

        const stats = {
            weekly: {},
            monthly: {},
            yearly: {},
            fiveYearly: {}
        };

        const addMood = (period, mood) => {
            stats[period][mood] = (stats[period][mood] || 0) + 1;
        };

        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        entries.forEach(entry => {
            const eDate = new Date(entry.date);
            const eYear = eDate.getFullYear();
            const eMonth = eDate.getMonth();

            const diffTime = Math.abs(now - eDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const mood = entry.mood;

            // Weekly (last 7 days is standard for mood trackers)
            if (diffDays <= 7) addMood('weekly', mood);

            // Monthly (this calendar month)
            if (eYear === currentYear && eMonth === currentMonth) {
                addMood('monthly', mood);
            }

            // Yearly (this calendar year)
            if (eYear === currentYear) {
                addMood('yearly', mood);
            }

            // 5-Yearly (within the last 5 years)
            if (currentYear - eYear >= 0 && currentYear - eYear < 5) {
                addMood('fiveYearly', mood);
            }
        });

        return stats;
    };

    return (
        <JournalContext.Provider value={{ entries, addEntry, getAnalytics }}>
            {children}
        </JournalContext.Provider>
    );
};
