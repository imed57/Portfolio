import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/imed57" rel='noreferrer' target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/imed-retibi-5595a01a1/" rel='noreferrer' target="_blank">
                <i className="fa fa-linkedin-square" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">IMED</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer",
                    1100,
                    "Entrepreneur",
                    1100,
                    "ETNA Paris",
                    1100,
                    "",
                    1100,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Full-Stack developer in intership
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="CV alternance.pdf" download="RETIBI Imed CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}