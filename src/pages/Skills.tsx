import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Scroll from "../components/Scroll";
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

  const r = useRef<any>();
  const e = useRef<any>();
  const s = useRef<any>();
  const u = useRef<any>();
  const m = useRef<any>();
  const e2 = useRef<any>();

  const Box = () => {
    const boxRef = useRef<any>();

    useFrame(() => {
      boxRef.current.rotation.y += 0.01;
    });

    return (
      <mesh
        ref={boxRef}
        rotation-x={Math.PI * 0.25}
        rotation-y={Math.PI * 0.25}
      >
        <tetrahedronBufferGeometry args={[1.85]} />
        <meshBasicMaterial wireframe color={"hsl(0,0%,30%)"} />
      </mesh>
    );
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    r.current.style.transform = `translateY(-${scrollTop / 10}%)`;
    e.current.style.transform = `translateY(${scrollTop / 20}%)`;
    s.current.style.transform = `translateY(-${scrollTop / 5}%)`;
    u.current.style.transform = `translateY(${scrollTop / 7}%)`;
    m.current.style.transform = `translateY(-${scrollTop / 20}%)`;
    e2.current.style.transform = `translateY(${scrollTop / 30}%)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Scroll>
      <div id="skills">
        <h1 className="section-title txt-800">
          <span className="txt-outlined">0</span>
          <span>2</span>
        </h1>

        <h3 className="side-section-title txt-xxs txt-400">
          <span>My</span> <span>personal</span> <span>journey</span>
        </h3>

        <div className="content">
          <div className="div-parent">
            <Canvas className="child-shape">
              <Suspense fallback={null}>
                <pointLight position={[5, 5, 5]} />
                <Box />
              </Suspense>
            </Canvas>
            <div className="child-txt">
              <div className="heading">
                <h2 className="txt-xl txt-800">
                  <span className="blinking">{"_"}</span>
                  <span className="txt-outlined">
                    <span ref={r}>R</span>
                    <span ref={e}>E</span>
                  </span>
                  <span ref={s}>S</span>
                  <span ref={u}>U</span>
                  <span className="txt-outlined" ref={m}>
                    M
                  </span>
                  <span className="txt-outlined" ref={e2}>
                    E
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="resume-content">
            <h2 className="txt-lg txt-800">
              <span className="txt-outlined ">EXP</span>ERIENCE
            </h2>
            <div className="resume-content-item">
              <div className="resume-content-item-desc">
                <h2 className="txt-sm txt-600">Software Developer</h2>
                <h2 className="txt-xs txt-400">ProductDock</h2>
              </div>
              <h2 className="txt-xxs txt-date txt-400">08/2019 - PRESENT</h2>
            </div>
            <div className="resume-content-item">
              <div className="resume-content-item-desc">
                <h2 className="txt-sm txt-600">Intern</h2>
                <h2 className="txt-xs txt-400">ProductDock Rookie Boot Camp</h2>
              </div>
              <h2 className="txt-xxs txt-date txt-400">02/2019 - 05/2019</h2>
            </div>
          </div>
          <div className="resume-content">
            <h2 className="txt-lg txt-800">
              <span className="txt-outlined">EDU</span>CATION
            </h2>
            <div className="resume-content-item">
              <div className="resume-content-item-desc">
                <h2 className="txt-sm txt-600">IT Engineer</h2>
                <h2 className="txt-xs txt-400">Slobomir P University</h2>
              </div>
              <h2 className="txt-xxs txt-date txt-400">2015 - 2019</h2>
            </div>
            <div className="resume-content-item">
              <div className="resume-content-item-desc">
                <h2 className="txt-sm txt-600">Computer Technician</h2>
                <h2 className="txt-xs txt-400">
                  Electro-technical High School
                </h2>
              </div>
              <h2 className="txt-xxs txt-date txt-400">2011 - 2015</h2>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};

export default Skills;
