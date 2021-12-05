import Section from "./Section";
import Skills from "./Skills";

import "./About.css";
import Button from "./Button";

const About = (): JSX.Element => (
  <Section id="about">
    <h3>My personal journey</h3>
    <div className="about">
      <div className="about-item">
        <h3 className="about-item-title">Experience</h3>
        <div className="about-item-content">
          <p className="about-item-content-date">08/2019 - present</p>
          <div>
            <p className="about-item-content-headline">Software Developer</p>
            <p className="about-item-content-description">ProductDock</p>
          </div>
        </div>
        <div className="about-item-content">
          <p className="about-item-content-date">03/2019 - 06/2019</p>
          <div>
            <p className="about-item-content-headline">Intern</p>
            <p className="about-item-content-description">
              ProductDock Rookie Boot Camp
            </p>
          </div>
        </div>
      </div>
      <div className="about-item">
        <h3 className="about-item-title">Education</h3>
        <div className="about-item-content">
          <p className="about-item-content-date">2015 - 2019</p>
          <div>
            <p className="about-item-content-headline">IT Engineer</p>
            <p className="about-item-content-description">
              Slobomir P University
            </p>
          </div>
        </div>
        <div className="about-item-content">
          <p className="about-item-content-date">2011 - 2015</p>
          <div>
            <p className="about-item-content-headline">Computer Technician</p>
            <p className="about-item-content-description">
              Electrotehnical High School in Doboj
            </p>
          </div>
        </div>
      </div>
    </div>
    <Button variant="btn-outline">Download CV</Button>
  </Section>
);

export default About;
