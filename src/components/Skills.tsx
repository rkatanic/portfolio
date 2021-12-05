import Section from "./Section";
import { ReactComponent as CodeIcon } from "../assets/icons/code.svg";
import { ReactComponent as VsCodeIcon } from "../assets/icons/vs-code.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/icons/stack-overflow.svg";
import { ReactComponent as NpmIcon } from "../assets/icons/npm.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import { ReactComponent as IntelliJIcon } from "../assets/icons/intellij.svg";
import { ReactComponent as PostmanIcon } from "../assets/icons/postman.svg";

import "./Skills.css";

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
        <h3>Some of the tools that I use daily, and many more...</h3>
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

        <h3>Services I provide</h3>
        <div className="skills-container">
          <div className="skill-icon">
            <CodeIcon />
          </div>
          <h3 className="item-title">Front End Development</h3>
          <p className="item-desc">
            Using <b className="skill-badge">HTML</b>,
            <b className="skill-badge"> CSS</b>,
            <b className="skill-badge"> Javascript</b>, and frameworks such as
            <b className="skill-badge"> React</b> and
            <b className="skill-badge"> Angular</b>, I can build fast,
            responsive and interactive client-side applications.
          </p>
        </div>
        <div className="skills-container">
          <div className="skill-icon">
            <CodeIcon />
          </div>
          <h3 className="item-title">Back End Development</h3>
          <p className="item-desc">
            Building scalable and maintainable server applications in
            <b className="skill-badge"> Java</b>, using
            <b className="skill-badge"> Spring Boot</b> framework and databases
            such <b className="skill-badge"> MySQL</b> or
            <b className="skill-badge"> MongoDB</b>.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
