import { ReactComponent as FolderIcon } from "../assets/icons/folder.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as BoxIcon } from "../assets/icons/box.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/icons/chevron-down.svg";

import { skills } from "../util/constants/skills";

import "./About.css";

const About = (): JSX.Element => {
  return (
    <div className="section">
      <div className="row">
        <div className="about-card">
          <div className="about-card-heading">_ Experience</div>
          <div className="about-card-item bg-gray-three">
            <div className="about-card-item-left">
              <FolderIcon />
              <span>08/2019 - present</span>
            </div>
            <span className="about-card-item-txt-right">
              <ChevronDownIcon />
            </span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left mg-l-075">
              <UserIcon />
              <span>Software Developer</span>
            </div>
            <span className="about-card-item-txt-right">role</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <BoxIcon />
              <span>ProductDock</span>
            </div>
            <span className="about-card-item-txt-right">company</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <LocationIcon />
              <span>Doboj</span>
            </div>
            <span className="about-card-item-txt-right">location</span>
          </div>
          <div className="about-card-item bg-gray-three">
            <div className="about-card-item-left">
              <FolderIcon />
              <span>02/2019 - 05/2019</span>
            </div>
            <span className="about-card-item-txt-right">
              <ChevronDownIcon />
            </span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left mg-l-075">
              <UserIcon />
              <span>Intern</span>
            </div>
            <span className="about-card-item-txt-right">role</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <BoxIcon />
              <span>Codecentric Rookie Boot Camp</span>
            </div>
            <span className="about-card-item-txt-right">company</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <LocationIcon />
              <span>Doboj</span>
            </div>
            <span className="about-card-item-txt-right">location</span>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-heading">_ Education</div>
          <div className="about-card-item  bg-gray-three">
            <div className="about-card-item-left">
              <FolderIcon />
              <span>2015 - 2019</span>
            </div>
            <span className="about-card-item-txt-right">
              <ChevronDownIcon />
            </span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left mg-l-075">
              <UserIcon />
              <span>IT Engineer</span>
            </div>
            <span className="about-card-item-txt-right">qualification</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <BoxIcon />
              <span>Slobomir P University</span>
            </div>
            <span className="about-card-item-txt-right">school</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <LocationIcon />
              <span>Doboj</span>
            </div>
            <span className="about-card-item-txt-right">location</span>
          </div>
          <div className="about-card-item bg-gray-three">
            <div className="about-card-item-left">
              <FolderIcon />
              <span>2011 - 2015</span>
            </div>
            <span className="about-card-item-txt-right">
              <ChevronDownIcon />
            </span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left mg-l-075">
              <UserIcon />
              <span>Computer Technician</span>
            </div>
            <span className="about-card-item-txt-right">qualification</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <BoxIcon />
              <span>Electro-technical High School</span>
            </div>
            <span className="about-card-item-txt-right">school</span>
          </div>
          <div className="about-card-item">
            <div className="about-card-item-left  mg-l-075">
              <LocationIcon />
              <span>Doboj</span>
            </div>
            <span className="about-card-item-txt-right">location</span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-card-heading">
              <div className="service-card-heading-title">_ Services</div>
              <div className="service-card-heading-num">.01</div>
            </div>
            <div className="service-card-title">
              Front-end <br />
              Development
            </div>
          </div>
          <div className="service-card-desc txt-300">
            Using modern frameworks to build fast and responsive single-page
            client applications.
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-card-heading">
              <div className="service-card-heading-title">_ Services</div>
              <div className="service-card-heading-num">.02</div>
            </div>
            <div className="service-card-title">
              Back-end <br />
              Development
            </div>
          </div>
          <div className="service-card-desc txt-300">
            Crafting scalable and maintainable server applications in Java,
            using Spring Boot framework.
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-card-heading">_ Skills</div>
          {skills.map((skill) => (
            <div key={skill.name} className="skills-card-item">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
