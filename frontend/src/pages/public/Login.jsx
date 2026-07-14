import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import journalImg from "../../assets/images/journal2.png";
import "../../styles/Signup.css"; // Reuse existing signup styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || data.error);

            login(data.user, data.token);
            navigate("/dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-left">
                <div className="signup-illustration-placeholder">
                    <img src={journalImg} alt="Moon Journal Notebook" className="signup-image" />
                </div>
            </div>

            <div className="signup-right">
                <div className="signup-card">
                    <h2>Welcome Back</h2>
                    <p>Login to access your safe space.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label>EMAIL ADDRESS</label>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="icon">✉️</span>
                            </div>
                        </div>

                        <div className="input-field">
                            <label>PASSWORD</label>
                            <div className="input-wrapper">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="icon">🔒</span>
                            </div>
                        </div>

                        <button type="submit" className="signup-btn">
                            Log In <span>→</span>
                        </button>
                    </form>

                    <div className="login-link">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
