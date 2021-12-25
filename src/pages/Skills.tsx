import Section from "../components/Section";
import Services from "../components/Services";
import Card from "../components/Card";
import { ReactComponent as VsCodeIcon } from "../assets/icons/vs-code.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as IntelliJIcon } from "../assets/icons/intellij.svg";
import { ReactComponent as PostmanIcon } from "../assets/icons/postman.svg";
import { ReactComponent as AngularIcon } from "../assets/icons/angular.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";
import { ReactComponent as SpringBootIcon } from "../assets/icons/spring-boot.svg";
import { ReactComponent as MySqlIcon } from "../assets/icons/mysql.svg";
import { ReactComponent as MongoDbIcon } from "../assets/icons/mongodb.svg";
import { ReactComponent as JavaIcon } from "../assets/icons/java.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as SassIcon } from "../assets/icons/sass.svg";
import Tilt from "react-parallax-tilt";

import "./Skills.css";
import Scroll from "../components/Scroll";

const Skills = (): JSX.Element => {
  const skills = [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Java", icon: <JavaIcon /> },
    { name: "Sass", icon: <SassIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Angular", icon: <AngularIcon /> },
    { name: "Spring Boot", icon: <SpringBootIcon /> },
    { name: "MySQL", icon: <MySqlIcon /> },
    { name: "MongoDB", icon: <MongoDbIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GitHubIcon /> },
    { name: "VS Code", icon: <VsCodeIcon /> },
    { name: "IntelliJ", icon: <IntelliJIcon /> },
  ];

  return (
    <Scroll>
      <div id="skills">
        <h1 className="section-title">
          <span className="txt-outlined">0</span>2
        </h1>

        <h3 className="side-section-title">My Personal Journey</h3>
        <div className="heading">
          <h2>
            <span className="txt-outlined">MY</span>
            <span>
              {" "}
              RE<span className="txt-outlined">-</span>
            </span>
          </h2>
          <h2>
            <span className="txt-outlined">-</span>SU
            <span className="txt-outlined">ME</span>
          </h2>
        </div>
        <h2 className="txt-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          rerum accusantium aliquam magni distinctio quisquam dolore! Incidunt
          delectus iste dolorum recusandae magnam similique unde aspernatur.
          Reprehenderit placeat expedita similique dolores!
        </h2>
      </div>
    </Scroll>
  );
};

export default Skills;
