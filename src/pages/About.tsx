import Section from "../components/Section";
import Button from "../components/Button";
import { CV_LINK } from "../util/constants/links";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";

import "./About.css";

const About = (): JSX.Element => {
  const handleCvLinkOpen = () => window.open(CV_LINK, "_blank");

  return (
    <Section id="about">
      <div className="about">
        <div className="about-section">
          <h3 className="section-headline">Experience</h3>

          <div className="card">
            <div className="card-row">
              <div className="card-icon">
                <WorkIcon />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-col">
                    <div className="card-heading">Software developer</div>
                    <div className="card-subtitle">ProductDock</div>
                  </div>
                  <div className="card-col card-col-2">
                    <div className="card-location">
                      <LocationIcon />
                      <span className="card-location-text">Doboj</span>
                    </div>
                    <div className="card-subtitle">
                      <CalendarIcon />
                      Aug 2019 - Present
                    </div>
                  </div>
                </div>
                <div className="card-desc">
                  Started working full time as a full stack developer, crafting
                  web products for various clients using Java and JavaScript
                  frameworks.
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-row">
              <div className="card-icon">
                <WorkIcon />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-col">
                    <div className="card-heading">Intern</div>
                    <div className="card-subtitle">Codecentric Bosnia</div>
                  </div>
                  <div className="card-col card-col-2">
                    <div className="card-location">
                      <LocationIcon />
                      <span className="card-location-text">Doboj</span>
                    </div>
                    <div className="card-subtitle">
                      <CalendarIcon />
                      Feb 2019 - May 2019
                    </div>
                  </div>
                </div>
                <div className="card-desc">
                  Attended 3 months rookie boot camp where I worked on building
                  internal employee management application using Angular, Spring
                  Boot and MySQL.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3 className="section-headline">Education</h3>
          <div className="card">
            <div className="card-row">
              <div className="card-icon">
                <EducationIcon />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-col">
                    <div className="card-heading">IT Engineer</div>
                    <div className="card-subtitle">Slobomir P University</div>
                  </div>
                  <div className="card-col card-col-2">
                    <div className="card-location">
                      <LocationIcon />
                      <span className="card-location-text">Doboj</span>
                    </div>
                    <div className="card-subtitle">
                      <CalendarIcon />
                      2015 - 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-row">
              <div className="card-icon">
                <EducationIcon />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <div className="card-col">
                    <div className="card-heading">Computer Technician</div>
                    <div className="card-subtitle">
                      Electro-technical High School
                    </div>
                  </div>
                  <div className="card-col card-col-2">
                    <div className="card-location">
                      <LocationIcon />
                      <span className="card-location-text">Doboj</span>
                    </div>
                    <div className="card-subtitle">
                      <CalendarIcon />
                      2011 - 2015
                    </div>
                  </div>
                </div>
              </div>
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
