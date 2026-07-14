import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import journalImg from "../../assets/images/journal2.png";
import "../../styles/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", { name, email });
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      console.log("Signup response:", data);

      if (!res.ok) throw new Error(data.message || data.error);

      login(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err.message);
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
          <h2>Start your journey<br />to clarity.</h2>
          <p>Capture your thoughts, track your emotions, and discover the patterns of your life in one beautiful space.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>FULL NAME</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="icon">👤</span>
              </div>
            </div>

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
              Create Account <span>→</span>
            </button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;