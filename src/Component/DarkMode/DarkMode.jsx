import { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const DarkMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex items-center space-x-2 mr-6 text-white">
      {theme === "dark" ? (
        <BsToggleOn
          size={30}
          color="yellow"
          style={{ cursor: "pointer" }}
          onClick={handleThemeSwitch}
        />
      ) : (
        <BsToggleOff
          size={30}
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={handleThemeSwitch}
        />
      )}
      <span className="text-white">{theme === "dark" ? "Dark" : "Light"}</span>
    </div>
  );
};

export default DarkMode;
