import React, { useState } from 'react'

function Mode() {
    const [mode, setMode] = useState("light");
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      setMode("dark");
    };
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
      setMode("light");
    };
    const toggleTheme = () => {
      if (mode === "dark") setLightMode();
      else setDarkMode();
    };
  return (
    <>
      {mode === "dark" ? (
        <i
          className="uil uil-sun home__social-icon"
          onClick={() => toggleTheme()}
        ></i>
      ) : (
        <i
          className="uil uil-moon home__social-icon"
          onClick={() => toggleTheme()}
        ></i>
      )}
    </>
  );
}

export default Mode