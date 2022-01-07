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

  return <div>skills</div>;
};

export default Skills;
