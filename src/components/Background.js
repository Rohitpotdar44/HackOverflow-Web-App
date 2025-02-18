import React from "react";
import backgroundVideoDesktop from "../assets/img/bg/bg-desktop.webm";
import backgroundVideoMobile from "../assets/img/bg/bg-phone.webm";
import "./Background.css";

const Background = (props) => {
  const isMobile = window.innerWidth < 450;

  const handleRegisterButtonClick = () => {
    window.open("https://forms.gle/C4fr1BQKXDFo3FJa6", "_blank");
  };

  return (
    <div className="background-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        id="home"
      >
        <source
          src={isMobile ? backgroundVideoMobile : backgroundVideoDesktop}
          type="video/webm"
        />
      </video>
      <div className="overlay">
        {props.children}
        <div className="button-container">
          <button  
            className="button-86"
            onClick={handleRegisterButtonClick}
          >
            Register Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
