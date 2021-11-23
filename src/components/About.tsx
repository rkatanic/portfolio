import Section from "./Section";

import "./About.css";

const About = (): JSX.Element => (
  <Section id="about">
    <div className="about">
      <h2 className="title">About</h2>
      <h3 className="subtitle">My personal journey</h3>

      <div className="about-content">
        <div>
          <div className="about-container">
            <h3>Work</h3>
            <div className="about-container-item">
              <p className="about-container-label">08/2019 - PRESENT</p>
              <div className="about-container-item-content">
                <p className="about-container-item-title">Software Developer</p>
                <p className="about-container-item-desc">ProductDock</p>
              </div>
            </div>
            <div className="about-container-item">
              <p className="about-container-label">03/2019 - 06/2019</p>
              <div className="about-container-item-content">
                <p className="about-container-item-title">Intern</p>
                <p className="about-container-item-desc">
                  ProductDock Rookie BootCamp
                </p>
              </div>
            </div>
          </div>

          <div className="about-container">
            <h3>Education</h3>

            <div className="about-container-item">
              <p className="about-container-label">2015-2019</p>
              <div className="about-container-item-content">
                <p className="about-container-item-title">IT Engineer </p>
                <p className="about-container-item-desc">
                  Slobomir P University
                </p>
              </div>
            </div>
            <div className="about-container-item">
              <p className="about-container-label">2011-2015</p>
              <div className="about-container-item-content">
                <p className="about-container-item-title">
                  Computing Technician
                </p>
                <p className="about-container-item-desc">
                  ElectroTechnical High School IN Doboj
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="about-container">
            <h3>My info</h3>
            <div className="about-container-item">
              <p className="about-container-label">Full Name</p>
              <p className="about-container-item-desc">Radivoje Katanic</p>
            </div>
            <div className="about-container-item">
              <p className="about-container-label">Age</p>
              <p className="about-container-item-desc">
                {new Date().getFullYear() - 1996}
              </p>
            </div>
            <div className="about-container-item">
              <p className="about-container-label">Location</p>
              <p className="about-container-item-desc">
                Doboj, Bosnia & Herzegovina
              </p>
            </div>
            <div className="about-container-item">
              <p className="about-container-label">Languages</p>
              <p className="about-container-item-desc">Serbian, English</p>
            </div>
          </div>

          <div className="about-container">
            <h3>About me</h3>
            <p className="about-container-text">
              I do what coders do. I like what coders like. In the end of the
              day, I'm just a regular person who likes doing some sports in free
              time, running, watching movies.
            </p>

            <p className="about--container-text">
              Sometimes writing dozens of lines of code I consider as an art, or
              atleast I have such an approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
