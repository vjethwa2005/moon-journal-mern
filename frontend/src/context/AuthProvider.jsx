import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from local token
  useEffect(() => {
    try {
      const token = localStorage.getItem("moon_journal_token");
      const savedUser = localStorage.getItem("moon_journal_user");

      if (token && savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error("Failed to parse saved user:", error);
      localStorage.removeItem("moon_journal_token");
      localStorage.removeItem("moon_journal_user");
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("moon_journal_token", token);
    localStorage.setItem("moon_journal_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("moon_journal_token");
    localStorage.removeItem("moon_journal_user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;