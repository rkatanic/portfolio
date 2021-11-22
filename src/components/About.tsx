import Section from "./Section";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as SuitcaseIcon } from "../assets/icons/suitcase.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";

import "./About.css";

const About = (): JSX.Element => (
  <Section id="about">
    <div className="about">
      <h2 className="title">About</h2>
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
    </div>
  </Section>
);

export default About;
