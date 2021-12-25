import "./Home.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Navigation from "../components/Navigation";

const Home = (): JSX.Element => {
  return (
    <div id="main" className="main">
      <About />
      <Skills />
    </div>
  );
};

export default Home;
