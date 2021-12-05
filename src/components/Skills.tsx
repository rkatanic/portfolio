import Section from "./Section";
import { ReactComponent as WebDevelopmentIcon } from "../assets/icons/web-development.svg";

import "./Skills.css";

const Skills = (): JSX.Element => {
  const skills = [
    { key: "HTML", value: 90 },
    { key: "CSS", value: 90 },
    { key: "JavaScript", value: 80 },
    { key: "Sass", value: 75 },
    { key: "React", value: 75 },
    { key: "Angular", value: 75 },
    { key: "Java", value: 70 },
    { key: "Spring Boot", value: 70 },
    { key: "MySQL", value: 70 },
    { key: "MongoDB", value: 70 },
  ];
  return (
    <Section id="skills">
      <div className="skills">
        <div className="skill-bars">
          <h3>My skills</h3>
          {skills.map(({ key, value }) => (
            <>
              <p className="skill-bar-label">{key}</p>
              <div key={key} className="skill-bar">
                <div
                  className="skill-bar-percent"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </>
          ))}
        </div>
        <h3>Services I provide</h3>
        <div className="skills-container">
          <div className="skill-icon">
            <WebDevelopmentIcon />
          </div>
          <h3 className="item-title">Front End Development</h3>
          <p className="item-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            optio quas deleniti incidunt perspiciatis laudantium est odit in
            officiis dolor sit vero veritatis qui aut facilis, adipisci culpa
            exercitationem quam?
          </p>
        </div>
        <div className="skills-container">
          <div className="skill-icon">
            <WebDevelopmentIcon />
          </div>
          <h3 className="item-title">Back End Development</h3>
          <p className="item-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            optio quas deleniti incidunt perspiciatis laudantium est odit in
            officiis dolor sit vero veritatis qui aut facilis, adipisci culpa
            exercitationem quam?
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
