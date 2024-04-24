import React, { useState } from "react";
function Social() {
  
  
  return (
    <>
      <div className="home__social">
        
        <a
          href="https://www.linkedin.com/in/upgraderboy/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/upgraderboy/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCEJnv8TaSl0i1nUMm-fGBnA?sub_confirmation=1"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-youtube"></i>
        </a>
        <a
          href="https://github.com/ankitbhuria"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github"></i>
        </a>
      </div>
    </>
  );
}

export default Social;
