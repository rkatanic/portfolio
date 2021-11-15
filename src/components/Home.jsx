import Section from "./Section";
import Typewriter from "typewriter-effect";
import myimage from "../assets/images/me1.png";
import { ReactComponent as MailSendIcon } from "../assets/icons/mail-send.svg";

import "./Home.css";

const Home = () => {
  return (
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
          <button type="button" className="btn-primary">
            Contact me
            <MailSendIcon />
          </button>
        </div>
        <div className="home-image-container">
          <img className="home-img" src={myimage} alt="my-img" />
        </div>
      </div>
    </Section>
  );
};

export default Home;
