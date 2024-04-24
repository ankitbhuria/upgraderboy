import React, { useEffect, useState } from 'react'
function Mode() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    };
    useEffect(()=>{
      if(localStorage.getItem("mode") === "light") setLightMode();
      else setDarkMode();
    }, []);
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("mode", "light");
      setMode("light");
    };
    const toggleTheme = () => {
      if (mode === "dark"){
        setLightMode();
      }
      else {setDarkMode();}
      console.log(localStorage.getItem("mode"))
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