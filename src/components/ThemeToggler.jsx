import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <button
          className="flex items-center"
          onClick={() => {
            setTheme("light");
          }}
        >
          <HiSun className="mr-2" />
          Light Mode
        </button>
      ) : (
        <button
          className="flex items-center"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <HiMoon className="mr-2" /> Dark Mode
        </button>
      )}
    </>
  );
}

export default ThemeToggler;
