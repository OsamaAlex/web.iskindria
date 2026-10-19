"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("webalex_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        applyThemeClass(savedTheme);
      } else {
        setTheme("dark");
        applyThemeClass("dark");
      }
    } catch (e) {
      setTheme("dark");
      applyThemeClass("dark");
    }
    setMounted(true);
  }, []);

  const applyThemeClass = (newTheme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyThemeClass(nextTheme);
    try {
      localStorage.setItem("webalex_theme", nextTheme);
    } catch (e) {
      // ignore
    }
  };

  const setSpecificTheme = (newTheme) => {
    if (newTheme !== "light" && newTheme !== "dark") return;
    setTheme(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem("webalex_theme", newTheme);
    } catch (e) {
      // ignore
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        isLight: theme === "light",
        toggleTheme,
        setTheme: setSpecificTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
