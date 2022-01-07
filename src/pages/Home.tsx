import "./Home.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ProgressBar from "../components/ProgressBar";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Navigation from "../components/Navigation";
import statue from "../assets/images/statue.png";

const Home = (): JSX.Element => {
  const mainTxt = useRef<any>();

  const handleMainDescDisplay = () => {
    mainTxt.current.style.opacity = 1;
    mainTxt.current.style.transform = "translateY(-20px)";
  };

  const handleMainDescHide = () => {
    mainTxt.current.style.opacity = 0;
    mainTxt.current.style.transform = "translateY(0)";
  };

  return (
    <div className="section">
      <div className="statue">
        <div
          ref={mainTxt}
          id="main-pinpoint-txt"
          className="pinpoint-txt txt-w-20"
        >
          This is main introduction text paragraph.
        </div>
        <div
          className="pinpoint"
          id="pin-1"
          onMouseEnter={handleMainDescHide}
          onMouseLeave={handleMainDescDisplay}
        ></div>
        <p className="pinpoint-txt txt-w-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id
        </p>
        <div
          className="pinpoint"
          id="pin-2"
          onMouseEnter={handleMainDescHide}
          onMouseLeave={handleMainDescDisplay}
        ></div>
        <p className="pinpoint-txt txt-w-20">second pinpoint text</p>
        <img src={statue} alt="" />
      </div>
    </div>
  );
};

export default Home;
