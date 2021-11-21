import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as AngularIcon } from "../assets/icons/angular.svg";
import { ReactComponent as SpringBootIcon } from "../assets/icons/spring-boot.svg";
import { ReactComponent as MySqlIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as MongoDbIcon } from "../assets/icons/mongodb.svg";

import "./Skills.css";

const Skills = () => (
  <div className="skills">
    <h2 className="title">Skills</h2>
    <h3 className="subtitle">My technical orientation</h3>
    <div className="skill-items">
      <div className="skill-item">
        <HtmlIcon />
        <span>HTML</span>
      </div>
      <div className="skill-item">
        <CssIcon />
        <span>CSS</span>
      </div>
      <div className="skill-item">
        <ReactIcon />
        <span>React</span>
      </div>
      <div className="skill-item">
        <AngularIcon />
        <span>Angular</span>
      </div>
      <div className="skill-item">
        <SpringBootIcon />
        <span>Spring Boot</span>
      </div>
      <div className="skill-item">
        <MySqlIcon />
        <span>MySQL</span>
      </div>
      <div className="skill-item">
        <MongoDbIcon />
        <span>MongoDB</span>
      </div>
    </div>
  </div>
);

export default Skills;
