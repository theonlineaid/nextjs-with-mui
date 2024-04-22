// ThemeContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Define the shape of your theme settings
interface ThemeSettings {
  mode: "light" | "dark";
  primaryColor: string;
  fontFamilies: string[];
}

// Define the shape of the context
interface ThemeContextType {
  settings: ThemeSettings;
  setThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  toggleMode: () => void;
  changePrimaryColor: (color: string) => void;
}

// Create a context for your theme settings
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useThemeHook = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Create a provider component to manage the theme settings
export const ThemeSetting: React.FC<ThemeProviderProps> = ({ children }) => {
  // Load theme settings from local storage, or use defaults if not available
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(() => {
    const storedThemeSettings = localStorage.getItem("themeSettings");
    return storedThemeSettings
      ? JSON.parse(storedThemeSettings)
      : {
          mode: "light",
          primaryColor: "#1976d2",
          fontFamilies: ["Roboto", "Arial", "sans-serif"],
        };
  });

  // Update local storage whenever theme settings change
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeSettings));
  }, [themeSettings]);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setThemeSettings((prevSettings) => ({
      ...prevSettings,
      mode: prevSettings.mode === "light" ? "dark" : "light",
    }));
  };

  // Function to change the primary color
  const changePrimaryColor = (color: string) => {
    setThemeSettings((prevSettings) => ({
      ...prevSettings,
      primaryColor: color,
    }));
  };

  // Create context value
  const contextValue: ThemeContextType = {
    settings: themeSettings,
    setThemeSettings,
    toggleMode,
    changePrimaryColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
