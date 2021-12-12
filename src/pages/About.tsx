import Section from "../components/Section";
import Button from "../components/Button";
import { CV_LINK } from "../util/constants/links";

import "./About.css";

const About = (): JSX.Element => {
  const handleCvLinkOpen = () => window.open(CV_LINK, "_blank");

  return (
    <Section id="about">
      <h3 className="headline">My personal journey</h3>
      <div className="about">
        <div className="about-item">
          <h3 className="card-title">Experience</h3>
          <div className="about-item-content">
            <p className="about-item-content-date">08/2019 - present</p>
            <div className="about-item-content-wrapper">
              <p className="about-item-content-headline">Software Developer</p>
              <p className="about-item-content-description">ProductDock</p>
              <p className="about-item-content-location">Doboj</p>
            </div>
          </div>
          <div className="about-item-content">
            <p className="about-item-content-date">02/2019 - 05/2019</p>
            <div className="about-item-content-wrapper">
              <p className="about-item-content-headline">Intern</p>
              <p className="about-item-content-description">
                codecentric bosnia rookie boot camp
              </p>
              <p className="about-item-content-location">Doboj</p>
            </div>
          </div>
        </div>
        <div className="about-item">
          <h3 className="card-title">Education</h3>
          <div className="about-item-content">
            <p className="about-item-content-date">09/2015 - 09/2019</p>
            <div className="about-item-content-wrapper">
              <p className="about-item-content-headline">IT Engineer</p>
              <p className="about-item-content-description">
                Slobomir P University
              </p>
              <p className="about-item-content-location">Doboj</p>
            </div>
          </div>
          <div className="about-item-content">
            <p className="about-item-content-date">09/2011 - 05/2015</p>
            <div className="about-item-content-wrapper">
              <p className="about-item-content-headline">Computer Technician</p>
              <p className="about-item-content-description">
                Electro-tehnical High School
              </p>
              <p className="about-item-content-location">Doboj</p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="btn-outline" onClick={handleCvLinkOpen}>
        Download CV
      </Button>
    </Section>
  );
};

export default About;
