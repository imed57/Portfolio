import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
    //here we have
    const programmingSkillsDetails = [
      { skill: "JavaScript", ratingPercentage: 65 },
      { skill: "TypeScript", ratingPercentage: 75 },
      { skill: "ReactJS/Next", ratingPercentage: 65 },
      { skill: "Express JS", ratingPercentage: 89 },
      { skill: "Node JS", ratingPercentage: 89 },
      { skill: "HTML", ratingPercentage: 80 },
      { skill: "CSS", ratingPercentage: 80 },
    ];
  
    const projectsDetails = [
      {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2020", toDate: "" },
        description:
          "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: 
        "Technologies Used: Javascript, Epress Js, React Js, Node JS, Bootstrap.",
      },
      {
        title: "Ecommerce Website  ",
        duration: { fromDate: "2020", toDate: "" },
        description:
          "Online ecommerce website for showcasing and selling products online.",
        subHeading:
        "Technologies Used: HTML, CCS, Javascript.",
      },
      {
        title: "Mini fight game ",
        duration: { fromDate: "2022", toDate: "" },
        description:
          "A mini fight game where you are a random character and you have to fight a random characters. System of rounds and health points.",
        subHeading:
          "Technologies Used: Javascript.",
      },
    ];
  
    const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"ETNA Paris"}
          subHeading={"Année préparatoire en tant que développeur intégrateur web"}
          fromDate={"2022"}
          toDate={"présent"}
        />

        <ResumeHeading
          heading={"Lycée Saint Exupéry, Fameck"}
          subHeading={"Obtention d'un Baccalauréat Scientifique avec mention"}
          fromDate={"2019"}
          toDate={"2021"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"ONET Security"}
            subHeading={"Security Guard"}
            fromDate={"2021"}
            toDate={"2022"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Used to work as a security guard in festivals and events in  Luxembourg.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Learned to work in a team and to be responsible.
            </span>
            <br />
          </div>
          <br></br>
          <ResumeHeading
            heading={"AFI ESCA"}
            subHeading={"Administrative Assistant"}
            fromDate={"2020"}
            toDate={"2021"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Administrative assistant in a health insurance/hedge funds in Luxembourg.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Learned to be rigourous and keep a perfect organisation.
            </span>
            <br />
          </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,
  
      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Basket-ball"
          description="I used to play baskety-ball in a professional team in Luxembourg and I love the pressure of the game and the team spirit."
        />
        <ResumeHeading
          heading="Mode"
          description="I'm really interested in fashion and I love to create original outfits."
        />
        <ResumeHeading
          heading="Photography"
          description="Fascinated by this art, I love taking pictures of landscapes and people."
        />
      </div>,
    ];
  
    const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };
  
    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`)}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
  
    const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  
    return (
      <div
        className="resume-container screen-container fade-in"
        id={props.id || ""}
      >
        <div className="resume-content">
          <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;