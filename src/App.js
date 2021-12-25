import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Settings from "./components/Settings";
import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import List from "./components/List";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";

const App = () => {
  function useWindowSize() {
    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app} className="App">
      <div data-testid="app" className="App">
        <div className="grid-wrapper">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
      </div>
      <Navigation />
      <div ref={scrollContainer} className="scroll">
        <Home />
      </div>
    </div>
  );
};

export default App;
