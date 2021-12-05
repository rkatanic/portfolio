import { useEffect, useState } from "react";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import Typewriter from "typewriter-effect";
import "./Home.css";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";
import me1 from "../assets/images/me1.png";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import ColorDropdown from "./ColorDropdown";

const Home = (): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  const shouldShowDarkMode = (): void => {
    if (isDarkMode) {
      window.document.body.setAttribute("class", "dark-mode");
    } else {
      window.document.body.removeAttribute("class");
    }
  };

  useEffect(() => {
    shouldShowDarkMode();
  }, [isDarkMode]);

  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div className="container">
      <div className="column-left">
        <div>
          <div className="progress-bar">
            <div className="progress-bar-pulse"></div>
            <div
              className="progress-bar-percent"
              style={{ height: `${scroll}%` }}
            ></div>
          </div>
          <h3 className="typewriter-headline">
            <Typewriter
              options={{
                cursor: "_",
                strings: [
                  "Hello!",
                  "Zdravo!",
                  "Konnichiwa!",
                  "Olá!",
                  "Hallo!",
                  "Privet!",
                  "Ciao!",
                  "Bonjour!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <h3 className="title">I'm Radivoje Katanic.</h3>
          <p className="desc">
            I am a full stack developer located in Doboj, Bosnia & Herzegovina.
            I do what coders do. I like what coders like. In the end of the day,
            I'm just a regular person who likes doing some sports in free time,
            watching movies and reading all kinds of articles.
          </p>
          <Navigation />
        </div>
        <div className="info">
          <div className="row">
            <img className="my-photo" src={me1} />
            <div className="contact-links">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/radivoje-katanic"
              >
                <div className="contact-link-icon">
                  <LinkedinIcon />
                </div>
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/k-rade">
                <div className="contact-link-icon">
                  <GithubIcon />
                </div>
                GitHub
              </a>
            </div>
          </div>
          <div className="actions">
            <ColorDropdown />
            <div className="night-mode-switch" onClick={toggleDarkMode}>
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </div>
          </div>
        </div>
      </div>
      <div className="column-right">
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
