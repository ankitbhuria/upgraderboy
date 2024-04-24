import React from 'react'
import UB from "../../assets/UB.png";
import BMC from "../../assets/BMC.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">
            <img src={UB} style={{ height: "200px" }} alt="" />
          </h1>
          <ul className="footer__list">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <a href="https://gravatar.com/upgraderboy96" className="bmc">
          {/* <img style={{ width: "10rem" }} src={BMC} alt="Buy Me A Coffee" /> */}
        </a>
        <div className="footer__social">
          <a
            href="https://www.youtube.com/channel/UCEJnv8TaSl0i1nUMm-fGBnA?sub_confirmation=1"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/upgraderboy/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/upgraderboy/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/ankitbhuria"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        {/* <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="upgraderboy"
          data-color="#BD5FFF"
          data-emoji=""
          data-font="Inter"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#ffffff"
          data-coffee-color="#FFDD00"
        ></script> */}
        <span className="footer__copy">
          &#169;{" "}Copyright 2024 | Developed by {" "}
          <span
            className='footer__copyright'
          >
            Upgrader Boy{" "}|{" "}
          </span>
           All right reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer