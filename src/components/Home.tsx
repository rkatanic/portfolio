import Section from "./Section";
import Typewriter from "typewriter-effect";
import myimage from "../assets/images/me1.png";
import { ReactComponent as MailSendIcon } from "../assets/icons/mail-send.svg";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-up.svg";
import "./Home.css";
import Button from "./Button";

const Home = (): JSX.Element => (
  <Section id="home">
    <div className="home">
      <div className="home-content">
        <h2 className="home-title">
          Hey, I am &nbsp;
          <Typewriter
            options={{
              strings: ["Radivoje.", "a coder.", "creative."],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h3 className="home-subtitle">Software Developer</h3>
        <p className="home-description">
          My main focus is on building efficient web apps that work across all
          platforms and browsers. Building web solutions is my satisfaction.
          Sometimes a problem solving can be relaxing too.
        </p>
        <Button
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
        >
          <span> Contact me</span>
          <MailSendIcon />
        </Button>
        <a className="scroll-down" href="#about">
          <div className="scroll-down-container">
            <div className="scroll-down-bubble"></div>
          </div>
          Read more <ArrowIcon />
        </a>
      </div>
      <div className="home-image-container">
        <img className="home-img" src={myimage} alt="my-img" />
      </div>
    </div>
  </Section>
);

export default Home;
