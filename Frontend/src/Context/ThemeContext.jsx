import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // مقدار اولیه رو مستقیم از localStorage می‌خونیم (نه توی useEffect)
  // اینجوری از همون render اول مقدار درست رو داریم و flash هم نداریم
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    // اگه چیزی ذخیره نشده بود (کاربر جدید) => پیش‌فرض true (دارک)
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("bg-slate-50");
      document.body.classList.add("bg-slate-900");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-slate-900");
      document.body.classList.add("bg-slate-50");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
