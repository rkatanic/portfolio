import Section from "../components/Section";
import Button from "../components/Button";
import { CV_LINK } from "../util/constants/links";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";

import "./About.css";
import Card from "../components/Card";

const About = (): JSX.Element => {
  const handleCvLinkOpen = () => window.open(CV_LINK, "_blank");

  return (
    <Section id="about">
      <Card title="Experience">
        <div className="card-row">
          <div className="card-icon">
            <WorkIcon />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="card-col">
                <div className="card-content-header-title">
                  Software developer
                </div>
                <div className="card-content-header-subtitle">ProductDock</div>
              </div>
              <div className="card-col card-col-2">
                <div className="card-content-header-location">
                  <LocationIcon />
                  <span className="card-content-header-location-text">
                    Doboj
                  </span>
                </div>
                <div className="card-content-header-subtitle">
                  <CalendarIcon />
                  Aug 2019 - Present
                </div>
              </div>
            </div>
            <div className="card-content-desc">
              Started working full time as a full stack developer, crafting web
              products for various clients using Java and JavaScript frameworks.
            </div>
          </div>
        </div>
        <hr />
        <div className="card-row">
          <div className="card-icon">
            <WorkIcon />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="card-col">
                <div className="card-content-header-title">Intern</div>
                <div className="card-content-header-subtitle">
                  Codecentric Bosnia
                </div>
              </div>
              <div className="card-col card-col-2">
                <div className="card-content-header-location">
                  <LocationIcon />
                  <span className="card-content-header-location-text">
                    Doboj
                  </span>
                </div>
                <div className="card-content-header-subtitle">
                  <CalendarIcon />
                  Feb 2019 - May 2019
                </div>
              </div>
            </div>
            <div className="card-content-desc">
              Attended 3 months rookie boot camp where I worked on building
              internal employee management application using Angular, Spring
              Boot and MySQL.
            </div>
          </div>
        </div>
      </Card>

      <Card title="Education">
        <div className="card-row">
          <div className="card-icon">
            <EducationIcon />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="card-col">
                <div className="card-content-header-title">IT Engineer</div>
                <div className="card-content-header-subtitle">
                  Slobomir P University
                </div>
              </div>
              <div className="card-col card-col-2">
                <div className="card-content-header-location">
                  <LocationIcon />
                  <span className="card-content-header-location-text">
                    Doboj
                  </span>
                </div>
                <div className="card-content-header-subtitle">
                  <CalendarIcon />
                  2015 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-row">
          <div className="card-icon">
            <EducationIcon />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="card-col">
                <div className="card-content-header-title">
                  Computer Technician
                </div>
                <div className="card-content-header-subtitle">
                  Electro-technical High School
                </div>
              </div>
              <div className="card-col card-col-2">
                <div className="card-content-header-location">
                  <LocationIcon />
                  <span className="card-content-header-location-text">
                    Doboj
                  </span>
                </div>
                <div className="card-content-header-subtitle">
                  <CalendarIcon />
                  2011 - 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Button variant="btn-outline" onClick={handleCvLinkOpen}>
        Download CV
      </Button>
    </Section>
  );
};

export default About;
