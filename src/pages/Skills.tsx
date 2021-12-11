import Section from "../components/Section";
import Services from "../components/Services";
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

import "./Skills.css";

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
    <Section id="skills">
      <div className="skills">
        <h3 className="headline">
          Languages <span className="primary">&</span> tools i use
        </h3>
        <div className="skill-list">
          {skills.map(({ name, icon }) => (
            <div key={name} className="skill-card">
              <div className="highlight"></div>
              {icon}
              <p className="skill-card-label">{name}</p>
            </div>
          ))}
        </div>
        <Services />
      </div>
    </Section>
  );
};

export default Skills;
