import { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { SettingsContext } from "../context/SettingsContext";
import { AuthContext } from "../context/AuthContext";
import "../styles/NavbarPrivate.css";

const NavbarPrivate = () => {
    const { isDarkMode, toggleTheme, colorTheme, changeColorTheme } = useContext(ThemeContext);
    const { showPrompts, togglePrompts, showAffirmations, toggleAffirmations } = useContext(SettingsContext);
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showSettings, setShowSettings] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    // Form state for editing profile
    const [editName, setEditName] = useState("");
    const [previewPhoto, setPreviewPhoto] = useState(null);
    const fileInputRef = useRef(null);

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    };

    const openProfileModal = () => {
        setEditName(user?.name || "");
        setPreviewPhoto(user?.photo || null);
        setShowSettings(false);
        setShowProfileModal(true);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoUrl = URL.createObjectURL(file);
            setPreviewPhoto(photoUrl);
        }
    };

    const saveProfile = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("moon_journal_token");
            const res = await fetch("/api/auth/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ name: editName, photo: previewPhoto })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || data.error);

            setUser(data.user);
            localStorage.setItem("moon_journal_user", JSON.stringify(data.user));
            setShowProfileModal(false);
        } catch (err) {
            alert("Error updating profile: " + err.message);
        }
    };

    return (
        <div className='navbar-private'>
            <div className="navbar-container">
                <Link to="/dashboard" className="navbar-logo-link">
                    <div className="navbar-logo">
                        MOON
                    </div>
                </Link>

                <div className="navbar-controls">
                    <button onClick={toggleTheme} className="icon-btn theme-toggle">
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>

                    <div className="settings-wrapper">
                        <div onClick={() => setShowSettings(!showSettings)} className="avatar icon-btn">
                            {user?.photo ? (
                                <img
                                    src={user.photo}
                                    alt="Profile"
                                    className="avatar-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            ) : null}
                            <div className="avatar-fallback" style={{ display: user?.photo ? 'none' : 'flex' }}>
                                {(() => {
                                    if (!user?.name) return "MC";
                                    const parts = user.name.trim().split(" ");
                                    if (parts.length > 1) {
                                        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                                    }
                                    return user.name.substring(0, 2).toUpperCase();
                                })()}
                            </div>
                        </div>

                        {showSettings && (
                            <div className="settings-dropdown">
                                <div className="settings-group profile-group" onClick={openProfileModal} style={{ cursor: 'pointer' }}>
                                    {user?.photo ? (
                                        <img
                                            src={user.photo}
                                            alt="Profile"
                                            className="avatar-img large"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="avatar large" style={{ display: user?.photo ? 'none' : 'flex' }}>
                                        {(() => {
                                            if (!user?.name) return "MC";
                                            const parts = user.name.trim().split(" ");
                                            if (parts.length > 1) {
                                                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                                            }
                                            return user.name.substring(0, 2).toUpperCase();
                                        })()}
                                    </div>
                                    <h4 className="profile-name">{user?.name || "Moon Child"}</h4>
                                    <span className="profile-label">Edit Profile</span>
                                </div>

                                <hr />

                                <h4>Settings</h4>

                                <div className="settings-group">
                                    <label>Theme Colors</label>
                                    <div className="color-options">
                                        <button
                                            className={`color-btn yellow-pink ${colorTheme === 'theme-yellow' ? 'active' : ''}`}
                                            onClick={() => changeColorTheme('theme-yellow')}
                                            title="Moon Yellow & Pink"
                                        />
                                        <button
                                            className={`color-btn blue-silver ${colorTheme === 'theme-blue' ? 'active' : ''}`}
                                            onClick={() => changeColorTheme('theme-blue')}
                                            title="Midnight Blue & Silver"
                                        />
                                        <button
                                            className={`color-btn green-sand ${colorTheme === 'theme-green' ? 'active' : ''}`}
                                            onClick={() => changeColorTheme('theme-green')}
                                            title="Sage Green & Sand"
                                        />
                                    </div>
                                </div>

                                <div className="settings-group toggle-group">
                                    <label>Writing Prompts</label>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={showPrompts}
                                            onChange={togglePrompts}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                <div className="settings-group toggle-group">
                                    <label>Daily Affirmations</label>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={showAffirmations}
                                            onChange={toggleAffirmations}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                <hr />

                                <button className="logout-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {showProfileModal && (
                <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
                    <div className="profile-modal" onClick={e => e.stopPropagation()}>
                        <h3>Edit Profile</h3>
                        <form onSubmit={saveProfile} className="profile-form">
                            <div className="photo-upload-container">
                                {previewPhoto ? (
                                    <img
                                        src={previewPhoto}
                                        alt="Preview"
                                        className="preview-avatar"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="preview-avatar placeholder" style={{ display: previewPhoto ? 'none' : 'flex' }}>
                                    {editName ? editName.substring(0, 2).toUpperCase() : "MC"}
                                </div>
                                <button type="button" className="upload-btn" onClick={() => fileInputRef.current.click()}>
                                    Change Photo
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                />
                            </div>

                            <div className="input-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="modal-actions">
                                <button type="button" className="cancel-btn" onClick={() => setShowProfileModal(false)}>Cancel</button>
                                <button type="submit" className="save-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavbarPrivate;
