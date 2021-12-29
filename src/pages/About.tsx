import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import { CV_LINK } from "../util/constants/links";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as LinkIcon } from "../assets/icons/link.svg";
import Tilt from "react-parallax-tilt";
import "./About.css";
import Scroll from "../components/Scroll";

const About = (): JSX.Element => {
  return (
    <Scroll>
      <div id="about" className="about">
        <h1 className="section-title txt-800">
          <span className="txt-outlined">0</span>
          <span>1</span>
        </h1>
        <h3 className="side-section-title txt-xxs txt-400">
          <span>Few</span> <span>words</span> <span>about</span> <span>me</span>
        </h3>

        <div className="content">
          <h2 className="txt-content">
            Hey there, <br />
            my name is <br />
            <h2 className="txt-outlined txt-lg txt-600">Radivoje Katanić.</h2> I
            am a software developer located in Doboj, Bosnia{" "}
            <span className="txt-outlined txt-800">&</span> Herzegovina.
          </h2>
        </div>
      </div>
    </Scroll>
  );
};

export default About;
