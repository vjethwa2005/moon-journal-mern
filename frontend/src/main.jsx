import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthProvider.jsx";
import { JournalProvider } from "./context/JournalContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <ThemeProvider>
        <AuthProvider>
          <JournalProvider>
            <AppRoutes />
          </JournalProvider>
        </AuthProvider>
      </ThemeProvider>
    </SettingsProvider>
  </React.StrictMode>
);