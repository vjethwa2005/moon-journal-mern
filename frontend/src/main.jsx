import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthProvider.jsx";
import { JournalProvider } from "./context/JournalContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";

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