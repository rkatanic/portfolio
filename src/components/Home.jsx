import Section from "./Section";
import myimage from "../assets/images/me1.png";
import { ReactComponent as MailSendIcon } from "../assets/icons/mail-send.svg";

import "./Home.css";

const Home = () => {
  return (
    <Section id="home">
      <div className="home">
        <div>
          <h2 className="home-title">Hi, I'm Radivoje</h2>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            aperiam nam unde sunt dicta error doloribus est ex animi reiciendis
            necessitatibus debitis nulla, nemo quis earum aliquid perferendis
            esse iure!
          </p>
          <button type="button" className="btn-primary">
            Contact
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
