import React, { useState } from "react";
import "./services.css";
import "../../App.css";
function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  {
    console.log(toggleState === 1);
  }
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Software <br /> Developer
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1 ? "services__modal" : "services__modal-hidden"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setToggleState(0)}
                ></i>
                <h3 className="services__modal-title">💻 Tech Stack:</h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      MERN (MongoDB, Express.js, React.js, Node.js) enthusiast,
                      crafting robust and scalable web applications that
                      redefine user experiences.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      Proficient in developing cross-platform mobile apps with
                      React Native, seamlessly bridging the gap between web and
                      mobile.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      Versatile in building native apps using Java and Kotlin,
                      ensuring top-notch performance and native integration.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">My <br /> Achievements</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2 ? "services__modal" : "services__modal-hidden"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setToggleState(0)}
                ></i>
                <h3 className="services__modal-title">My Achievements</h3>
                <p className="services__modal-description">
                  I'm a dynamic force in the realm of technology, specializing
                  in cutting-edge solutions and pushing the boundaries of
                  innovation.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      Anchor in College Programs
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">Many Internships</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      Always In Searching Environment that can enhance my skills
                      in tech
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                Learn In <br /> Public
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3 ? "services__modal" : "services__modal-hidden"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => setToggleState(0)}
                ></i>
                <h3 className="services__modal-title">
                  🌟 Embarking on my <br /> &apos;Learn in Public&apos; journey! 🚀
                </h3>
                <p className="services__modal-description">
                  Let&apos;s inspire and empower each other to embrace continuous
                  learning and growth! 💻✨
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="http://upgraderboy.tech"
                      className="services__modal-info"
                    >
                      <u className="my__links">Upgrader Boy</u> =&gt; My Portfolio
                    </a>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="https://upgraderboy.com"
                      className="services__modal-info"
                    >
                      <u className="my__links">Upgrader Boy</u> =&gt; My Personal Brand
                    </a>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="https://upgraderboy.hashnode.dev/"
                      className="services__modal-info"
                    >
                      <u className="my__links">My Blogs</u> =&gt; All Articles By Me
                    </a>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="linkedin.com/in/upgraderboy"
                      className="services__modal-info"
                    >
                      <u className="my__links">LinkedIn</u> =&gt; Social Platform
                    </a>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="https://www.instagram.com/upgraderboy/"
                      className="services__modal-info"
                    >
                      <u className="my__links">Instagram</u> =&gt; Social Platform
                    </a>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <a
                      href="twitter.com/intent/follow?screen_name=upgraderboy"
                      className="services__modal-info"
                    >
                      <u className="my__links">Twitter</u> =&gt; Social Platform
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
