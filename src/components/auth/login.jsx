// import React, { useState } from "react";
// import "./services.css";
// import "../../App.css";
function Register({ toggleState, setToggleState }) {
  {
    console.log(toggleState === 1);
  }
  return (
    <>
      <div
        className={
          toggleState === true ? "services__modal" : "services__modal-hidden"
        }
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => setToggleState(0)}
          ></i>
          <h3 className="services__modal-title">Software Developer</h3>
          <p className="services__modal-description">
            Service with more than 3 years of experience.Providing quality work
            to clients and companies.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>

              <p className="services__modal-info">I develop the logics</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>

              <p className="services__modal-info">I develop the logics</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>

              <p className="services__modal-info">I develop the logics</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Register;
