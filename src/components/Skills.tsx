import Section from "./Section";
import { ReactComponent as VsCodeIcon } from "../assets/icons/vs-code.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/icons/stack-overflow.svg";
import { ReactComponent as NpmIcon } from "../assets/icons/npm.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as IntelliJIcon } from "../assets/icons/intellij.svg";
import { ReactComponent as PostmanIcon } from "../assets/icons/postman.svg";

import "./Skills.css";
import Services from "./Services";

const Skills = (): JSX.Element => {
  const skills = [
    { key: "HTML", value: 90 },
    { key: "CSS", value: 90 },
    { key: "JavaScript", value: 80 },
    { key: "Java", value: 70 },
    { key: "Sass", value: 75 },
    { key: "React", value: 75 },
    { key: "Angular", value: 75 },
    { key: "Spring Boot", value: 70 },
    { key: "MySQL", value: 65 },
    { key: "MongoDB", value: 65 },
  ];

  return (
    <Section id="skills">
      <div className="skills">
        <div className="skill-bars">
          <h3 className="headline">My skills</h3>
          {skills.map(({ key, value }) => (
            <div key={key}>
              <p className="skill-bar-label">{key}</p>
              <div key={key} className="skill-bar">
                <div
                  className="skill-bar-percent"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="headline">Some of the tools I use, and many more...</h3>
        <div className="tools">
          <div id="a" className="tool">
            <GitIcon />
            <span className="tool-label">Git</span>
          </div>
          <div id="b" className="tool">
            <GitHubIcon />
            <span className="tool-label">GitHub</span>
          </div>
          <div id="c" className="tool">
            <VsCodeIcon />
            <span className="tool-label">VS Code</span>
          </div>
          <div id="d" className="tool">
            <IntelliJIcon />
            <span className="tool-label">IntelliJ</span>
          </div>
          <div id="e" className="tool">
            <NpmIcon />
            <span className="tool-label">npm</span>
          </div>
          <div id="f" className="tool">
            <DockerIcon />
            <span className="tool-label">Docker</span>
          </div>
          <div id="g" className="tool">
            <PostmanIcon />
            <span className="tool-label">Postman</span>
          </div>
          <div id="h" className="tool">
            <StackOverflowIcon />
            <span className="tool-label">Stack Overflow</span>
          </div>
        </div>
        <Services />
      </div>
    </Section>
  );
};

export default Skills;
