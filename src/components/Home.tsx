import Typewriter from "typewriter-effect";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";

import "./Home.css";
import Faq from "./Faq";

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
      <Faq />
      <Contact />
    </div>
  </div>
);

export default Home;
