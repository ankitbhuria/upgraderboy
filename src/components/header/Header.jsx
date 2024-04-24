import React, { useState } from "react";
import UB from "../../assets/upgraderboy_dark.svg";
import AB from "../../assets/logo1.svg";
import "./header.css";
import Register from "../auth/Register.jsx";
import Mode from "../mode/Mode.jsx";
import ShareButton from "./ShareButton.jsx";
// import "../../../public/share.js";
function Header() {
  const [dark, setMode] = useState(true);
  const [Toggle, showMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeNav, setActiveNav] = useState("#home");
  
  const [toggleState, setToggleState] = useState(false);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  window.addEventListener("scroll", function(){

    const header = this.document.querySelector(".header");
    if(this.scrollY >= 80) header.classList.add("scroll-header");
    
    else header.classList.remove("scroll-header");})
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a
            className="nav__logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            href="index.html"
            rel="noopener noreferrer"
          >
            <img
              src={!dark == true ? UB : AB}
              style={{ height: "200px" }}
              alt="Upgrader Boy"
            />
            
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon active-link"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>About Me
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
                  <div className="mode" onClick={()=>setMode(!dark)}><Mode /></div>
          {isLoggedIn ? (
            <>
              <ShareButton />

              <Register toggleState={toggleState} setToggleState={setToggleState} />
            </>
          ) : (
            <>
              <img src="" />
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
