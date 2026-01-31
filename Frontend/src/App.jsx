import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // وقتی صفحه لود شد، حالت قبلی ذخیره‌شده رو برگردون
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  // وقتی darkMode تغییر کرد، کلاس html و localStorage رو آپدیت کن
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

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="sm:px-16 lg:px-22 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
        {/* Intro Section */}
        <IntroSection />

        {/* About Me */}
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
