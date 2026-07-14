import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { JournalContext } from "../../context/JournalContext";
import { SettingsContext } from "../../context/SettingsContext";
import NavbarPrivate from "../../components/NavbarPrivate";
import EntryCard from "../../components/EntryCard";
import Calendar from "../../components/Calendar";
import "../../styles/Dashboard.css";

const affirmationsList = [
    "You are capable of amazing things.",
    "Breathe in the good, exhale the bad.",
    "Every step you take is a step forward.",
    "Your feelings are valid and matter.",
    "You are stronger than your storm.",
    "Give yourself permission to rest.",
    "You bring light into the universe.",
    "It's okay to not be okay right now.",
    "Trust the timing of your life.",
    "You are enough, just as you are."
];

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { entries, getAnalytics } = useContext(JournalContext);
    const [activeTab, setActiveTab] = useState('weekly');
    const [selectedDate, setSelectedDate] = useState(null);
    const [affIdx, setAffIdx] = useState(0);

    const { showAffirmations } = useContext(SettingsContext);

    useEffect(() => {
        if (!showAffirmations) return;

        const interval = setInterval(() => {
            setAffIdx(prev => (prev + 1) % affirmationsList.length);
        }, 30000); // 30 seconds

        return () => clearInterval(interval);
    }, [showAffirmations]);

    const stats = getAnalytics();

    const displayedEntries = selectedDate
        ? entries.filter(e => e.date === selectedDate)
        : entries;

    const renderMoods = (periodStats) => {
        if (!periodStats || Object.keys(periodStats).length === 0) {
            return <div className="no-moods"><p>No mood data yet.</p></div>;
        }

        const maxCount = Math.max(...Object.values(periodStats));

        return (
            <div className="mood-bar-graph">
                {Object.entries(periodStats).map(([mood, count]) => {
                    const percentage = `${(count / maxCount) * 100}%`;
                    return (
                        <div key={mood} className="mood-bar-row">
                            <div className="mood-label">{mood} <span className="mood-number">({count})</span></div>
                            <div className="mood-bar-track">
                                <div
                                    className="mood-bar-fill"
                                    style={{ width: percentage, backgroundColor: 'var(--theme-primary)' }}
                                ></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };

    return (
        <>
            <NavbarPrivate />
            <div className="dashboard-page">
                <div className="dashboard-container">
                    <header className="dashboard-header">
                        <div>
                            <h1 className="dashboard-title">Welcome back, {user?.name || "Moon Child"} 🌙</h1>
                            <p className="dashboard-subtitle">Your safe space to reflect and grow.</p>
                        </div>
                        <div className="dashboard-actions">
                            <Link to="/write" className="btn-write">
                                + Write New Entry
                            </Link>
                        </div>
                    </header>

                    {showAffirmations && (
                        <div className="dashboard-affirmation">
                            <p>"{affirmationsList[affIdx]}"</p>
                        </div>
                    )}

                    <div className="dashboard-grid">
                        {/* Left Sidebar (30%) */}
                        <div className="dashboard-sidebar">
                            <section className="dashboard-analytics">
                                <div className="analytics-header">
                                    <h2>Mood Tracker</h2>
                                </div>
                                <div className="analytics-tabs" style={{ marginBottom: "16px" }}>
                                    <button onClick={() => setActiveTab('weekly')} className={activeTab === 'weekly' ? 'active' : ''}>Week</button>
                                    <button onClick={() => setActiveTab('monthly')} className={activeTab === 'monthly' ? 'active' : ''}>Month</button>
                                    <button onClick={() => setActiveTab('yearly')} className={activeTab === 'yearly' ? 'active' : ''}>Year</button>
                                    <button onClick={() => setActiveTab('fiveYearly')} className={activeTab === 'fiveYearly' ? 'active' : ''}>5-Yr</button>
                                </div>

                                <div className="analytics-content">
                                    {renderMoods(stats[activeTab])}
                                </div>
                            </section>

                            <Calendar
                                entries={entries}
                                selectedDate={selectedDate}
                                onSelectDate={setSelectedDate}
                            />
                        </div>

                        {/* Right Main Area (70%) */}
                        <section className="entries-section">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                <h2 style={{ marginBottom: 0 }}>
                                    {selectedDate ? `Entries for ${selectedDate}` : "Your Universe"}
                                </h2>
                                {selectedDate && (
                                    <button
                                        onClick={() => setSelectedDate(null)}
                                        style={{ background: 'transparent', border: '1px solid #ccc', borderRadius: '20px', padding: '6px 12px', cursor: 'pointer', fontSize: '13px' }}
                                    >
                                        Clear Filter
                                    </button>
                                )}
                            </div>
                            {displayedEntries.length === 0 ? (
                                <div className="no-entries">
                                    <p>It's quiet here. Ready to write your first entry?</p>
                                </div>
                            ) : (
                                <div className="entries-list">
                                    {displayedEntries.map(entry => (
                                        <EntryCard key={entry.id} entry={entry} />
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
