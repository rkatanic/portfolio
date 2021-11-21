import Section from "./Section";
import Skills from "./Skills";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as SuitcaseIcon } from "../assets/icons/suitcase.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as DocumentIcon } from "../assets/icons/document.svg";

import myimage from "../assets/images/me2.png";

import "./About.css";
import Button from "./Button";

const About = (): JSX.Element => (
  <Section id="about">
    <div className="about">
      <h1 className="title">About</h1>
      <h3 className="subtitle">My personal journey</h3>

      <div className="about-content">
        <div className="about-content-container">
          <h2 className="about-content-container-title">
            <SuitcaseIcon />
            Work
          </h2>

          <div style={{ position: "relative" }}>
            <div className="about-rounder"></div>
            <div className="about-line"></div>
            <p>
              <CalendarIcon />
              08/2020 - present
            </p>
            <h3>Software Developer</h3>
            <h2>ProductDock</h2>
          </div>

          <div style={{ position: "relative" }}>
            <div className="about-rounder"></div>
            <p>
              <CalendarIcon />
              03/2020 - 06/2020
            </p>
            <h3>Intern</h3>
            <h2>ProductDock Rookie Bootcamp</h2>
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
            <p>
              <CalendarIcon />
              2015 - 2019
            </p>
            <h3>IT Engineer</h3>
            <h2>Slobomir P University</h2>
          </div>

          <div style={{ position: "relative" }}>
            <div className="about-rounder"></div>
            <p>
              <CalendarIcon /> 2011 - 2015
            </p>
            <h3>Computer Technician</h3>
            <h2>Electrotechnical High School in Doboj</h2>
          </div>
        </div>
      </div>

      <Skills />
      <div className="download-cv-container">
        <div className="download-cv-container-left">
          <h2 className="download-cv-container-title">
            Want more information?
          </h2>
          <p>For more details, feel free to download my CV and take a look!</p>
          <Button variant="btn-outline">
            <span>Download CV</span>
            <DocumentIcon />
          </Button>
        </div>
        <img src={myimage} alt="" />
      </div>
    </div>
  </Section>
);

export default About;
