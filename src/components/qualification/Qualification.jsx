import React, { useState } from "react";
import "./qualification.css";
function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>

        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__active qualification__button button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__active qualification__button button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th - 77%</h3>
                <span className="qualification__subtitle">RBSE</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2019-20
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th - 85%</h3>
                <span className="qualification__subtitle">RBSE</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2021 - 22
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BCA 1st - 744</h3>
                <span className="qualification__subtitle">
                  Seth GB Podar College, Nawalgarh
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2022 - 23
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                  Intern At Topper World
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 20 March 2024 - 20 April
                  2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                  Intern At OctNet
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 1 April 2024 - 1 May 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                  Intern At Topper World
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 20 March 2024 - 20 April
                  2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                  Intern At OctNet
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 1 April 2024 - 1 May 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;
