import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Spline from '@splinetool/react-spline';
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Hello, my name is Imed. I'm 19 years old full-stack web developer. As a self-taught, I started learning development in 2018. I'm currently studying computer science at ETNA Paris. I'm passionate about web development and I'm always looking for new challenges. I'm a fast learner and I'm always looking for new opportunities to improve my skills. That's why I'm looking for an internship as a full-stack or web developer.",
    highlights: {
      bullets: [
        "Full Stack development",
        "Interactive Front End design",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {" "}
                Hire Me{" "}
              </button>
              <a href="Retibi imed (1).pdf" download="RETIBI Imed CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}