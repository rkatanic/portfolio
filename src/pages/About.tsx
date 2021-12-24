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

const About = (): JSX.Element => {
  return (
    <div id="about" className="about">
      <div className="side-section">
        <h3 className="side-section-title">Few Words About Me</h3>
      </div>
      <h3 className="number txt-outlined section-title">01</h3>
      <h2 className="content-text">
        Hey there, <br />
        My name is <br />
        <h2 className="txt-outlined">Radivoje Katanić.</h2> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolorem, explicabo. Soluta autem
        vero, aliquam, iste odit nostrum quae nulla, nisi ad ipsa natus hic
        cupiditate sit adipisci neque voluptatem magnam?
      </h2>
    </div>
  );
};

export default About;
