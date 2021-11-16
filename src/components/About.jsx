import Section from "./Section";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as SuitcaseIcon } from "../assets/icons/suitcase.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as AngularIcon } from "../assets/icons/angular.svg";
import myimage from "../assets/images/me2.png";

import "./About.css";

const About = () => {
  return (
    <Section id="about">
      <div className="about">
        <h1 className="about-title">About</h1>
        <h3 className="about-subtitle">My personal journey</h3>

        <div className="about-content">
          <div className="about-content-container">
            <h2 className="about-content-container-title">
              <SuitcaseIcon />
              Work
            </h2>

            <div style={{ position: "relative" }}>
              <div className="about-rounder"></div>
              <div className="about-line"></div>

              <h2>ProductDock</h2>
              <h3>Sotware developer</h3>
              <p>
                <CalendarIcon />
                August 2020 - present
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div className="about-rounder"></div>
              <h2>ProductDock Rookie Bootcamp</h2>
              <h3>Intern</h3>
              <p>
                <CalendarIcon />
                March 2020 - June 2020
              </p>
            </div>
          </div>

          <div className="about-content-container">
            <h2 className="about-content-container-title">
              <EducationIcon />
              Education
            </h2>

            <div style={{ position: "relative" }}>
              <div className="about-rounder"></div>
              <div className="about-line"></div>

              <h2>Slobomir P University</h2>
              <h3>IT Engineer</h3>
              <p>
                <CalendarIcon />
                2015 - 2019
              </p>
            </div>

            <div style={{ position: "relative" }}>
              <div className="about-rounder"></div>
              <h2>Electrotechnical High School in Doboj</h2>
              <h3>Computer technician</h3>
              <p>
                <CalendarIcon /> 2011 - 2015
              </p>
            </div>
          </div>
        </div>

        <h2 className="about-title">Skills</h2>
        <h3 className="about-subtitle">My technical orientation</h3>

        <div className="skill-content">
          <div className="skill-container">
            <HtmlIcon />
            <span>HTML</span>
          </div>
          <div className="skill-container">
            <CssIcon />
            <span>CSS</span>
          </div>
          <div className="skill-container">
            <ReactIcon />
            <span>React</span>
          </div>
          <div className="skill-container">
            <AngularIcon />
            <span>Angular</span>
          </div>
        </div>

        <div className="download-cv-container">
          <div className="download-cv-container-left">
            <h2 className="download-cv-container-title">
              Want more information?
            </h2>
            <p>
              For more details, feel free to download my CV and take a look!
            </p>
            <button className="btn btn-outline">Download CV</button>
          </div>
          <img src={myimage} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
