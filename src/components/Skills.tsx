import Section from "./Section";
import Button from "./Button";
import { ReactComponent as DocumentIcon } from "../assets/icons/document.svg";
import myimage from "../assets/images/me2.png";

import "./Skills.css";

const Skills = (): JSX.Element => (
  <Section id="skills">
    <div className="skills">
      <h2 className="title">Skills</h2>
      <h3 className="subtitle">My technical orientation</h3>
      <div className="skills-content">
        <div>
          <p>
            I am honing my skills at web development, mostly because I am
            passionate about solving challenging problems when it comes to
            developing web applications and creating delightful user
            experiences.
          </p>
          <br />
          <p>
            My skills are oriented around latest web development technologies.
            Using HTML, CSS , Javascript, and frameworks such as React and
            Angular, I enjoy building fast, responsive and interactive web apps.
          </p>
          <br />
          <p>
            Also I am backend oriented on building API services in Java, with
            Spring Boot framework which is used to build stand-alone and
            production ready spring applications.
          </p>
        </div>
        <div className="skills-items">
          <div className="skills-item">
            <h4 className="skills-item-title">Front-End Development</h4>
            <div className="skills-item-badges">
              <span className="skills-item-badge">HTML</span>
              <span className="skills-item-badge">CSS</span>
              <span className="skills-item-badge">JavaScript</span>
              <span className="skills-item-badge">React</span>
              <span className="skills-item-badge">Angular</span>
            </div>
          </div>

          <div className="skills-item">
            <h4 className="skills-item-title">Back-End Development</h4>
            <div className="skills-item-badges">
              <span className="skills-item-badge">Java</span>
              <span className="skills-item-badge">Spring Boot</span>
            </div>
          </div>

          <div className="skills-item">
            <h4 className="skills-item-title">Databases</h4>
            <div className="skills-item-badges">
              <span className="skills-item-badge">MySQL</span>
              <span className="skills-item-badge">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

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

export default Skills;
