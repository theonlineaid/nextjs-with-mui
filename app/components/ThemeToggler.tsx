import React from "react";
import { useThemeHook } from "../contexts/ThemeContext";

const ThemeToggler = () => {
  const { settings, toggleMode } = useThemeHook(); // Get the theme settings and functions using the useTheme hook

  const handleToggleMode = () => {
    toggleMode(); // Toggle between light and dark mode
  };

  return (
    <div>
      {/* Toggle button for switching between light and dark mode */}
      <button onClick={handleToggleMode}>
        {settings.mode === "light"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggler;
