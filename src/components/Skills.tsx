import Section from "./Section";
import Button from "./Button";
import { ReactComponent as DocumentIcon } from "../assets/icons/document.svg";
import { ReactComponent as JavaCodeSvg } from "../assets/icons/java-code.svg";
import myimage from "../assets/images/me2.png";

import "./Skills.css";

const Skills = (): JSX.Element => {
  return (
    <Section id="skills">
      <div className="skills">
        <h2 className="title">Skills</h2>
        <h3 className="subtitle">My technical orientation</h3>

        <div className="skills-content">
          <div>
            <p className="skills-content-text">
              I am honing my skills at web development, mostly because I am
              passionate about solving challenging problems when it comes to
              developing web applications and creating delightful user
              experiences.
            </p>
            <br />
            <p className="skills-content-text">
              My skills are oriented around latest web development technologies.
              Using HTML, CSS , Javascript, and frameworks such as React and
              Angular, I enjoy building fast, responsive and interactive web
              apps.
            </p>
            <br />
            <p className="skills-content-text">
              Also I am backend oriented on building API services in Java, with
              Spring Boot framework which is used to build stand-alone and
              production ready spring applications.
            </p>
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
};

export default Skills;
