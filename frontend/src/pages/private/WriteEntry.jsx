import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JournalContext } from "../../context/JournalContext";
import { SettingsContext } from "../../context/SettingsContext";
import NavbarPrivate from "../../components/NavbarPrivate";
import "../../styles/WriteEntry.css";

const moods = ["Calm 🌙", "Happy ✨", "Anxious ☁️", "Tired 🌘", "Grateful 🌟", "Sad 🌧️"];

const prompts = [
    "What made you smile today?",
    "You are doing your best. What is one small win you had today?",
    "Write down three things you are grateful for right now.",
    "What is taking up most of your headspace? Let it out.",
    "Describe a moment of peace you experienced recently.",
    "Take a deep breath. What do you need to forgive yourself for today?"
];

const WriteEntry = () => {
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("Calm 🌙");
    const [date, setDate] = useState("");
    const [currentPrompt, setCurrentPrompt] = useState("");

    const { addEntry } = useContext(JournalContext);
    const { showPrompts } = useContext(SettingsContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Auto-set the date to today (YYYY-MM-DD for standard input)
        const today = new Date().toISOString().split('T')[0];
        setDate(today);

        // Pick a random prompt
        if (showPrompts) {
            setCurrentPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
        }
    }, [showPrompts]);

    const handleSave = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        addEntry({ content, mood, date });
        navigate("/dashboard");
    };

    return (
        <>
            <NavbarPrivate />
            <div className="write-page">
                <div className="write-container">
                    <header className="write-header">
                        <h2>New Entry</h2>
                        <p className="write-subtitle">Let your thoughts flow...</p>
                    </header>

                    <form onSubmit={handleSave} className="write-form">
                        <div className="write-meta">
                            <div className="input-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Mood</label>
                                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                                    {moods.map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {showPrompts && currentPrompt && (
                            <div className="writing-prompt-box">
                                ✨ <strong>Prompt:</strong> {currentPrompt}
                            </div>
                        )}

                        <textarea
                            className="write-textarea"
                            placeholder="What's on your mind today?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>

                        <div className="write-actions">
                            <button type="button" className="btn-cancel" onClick={() => navigate("/dashboard")}>Cancel</button>
                            <button type="submit" className="btn-save">Save Entry</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default WriteEntry;
