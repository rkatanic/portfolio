import Typewriter from "typewriter-effect";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";
import me1 from "../assets/images/me1.png";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import ColorSwitch from "./ColorSwitch";
import ProgressBar from "./ProgressBar";
import DarkModeSwitch from "./DarkModeSwitch";

import "./Home.css";
import Footer from "./Footer";

const Home = (): JSX.Element => (
  <div className="container">
    <div className="column-left">
      <div>
        <ProgressBar />
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
          I am a full stack developer located in Doboj, Bosnia & Herzegovina. I
          do what coders do. I like what coders like. In the end of the day, I'm
          just a regular person who likes doing some sports in free time,
          watching movies and reading all kinds of articles.
        </p>
        <Navigation />
      </div>
      <Footer />
    </div>
    <div className="column-right">
      <About />
      <Skills />
      <Contact />
    </div>
  </div>
);

export default Home;
