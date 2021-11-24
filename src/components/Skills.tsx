import Section from "./Section";
import Button from "./Button";
import { ReactComponent as DocumentIcon } from "../assets/icons/document.svg";
import myimage from "../assets/images/me2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Skills.css";

const Skills = (): JSX.Element => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Section id="skills">
      <div className="skills">
        <h2 className="title">Skills</h2>
        <h3 className="subtitle">My technical orientation</h3>

        <div className="skills-content">
          <div>
            <p className="skills-content-text">
              I am honing my skills at web development, mostly because I am
              passionate about solving challenging problems when it comes to
              developing web applications and creating delightful user
              experiences.
            </p>
            <br />
            <p className="skills-content-text">
              My skills are oriented around latest web development technologies.
              Using HTML, CSS , Javascript, and frameworks such as React and
              Angular, I enjoy building fast, responsive and interactive web
              apps.
            </p>
            <br />
            <p className="skills-content-text">
              Also I am backend oriented on building API services in Java, with
              Spring Boot framework which is used to build stand-alone and
              production ready spring applications.
            </p>
          </div>
          <Swiper
            effect="fade"
            className="skills-swiper"
            navigation
            pagination
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000 }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="skills-swiper-slide">
              <div className="skills-item">
                <h3>Front End Development</h3>
                <div style={{ display: "flex" }}>
                  <div>
                    <div className="about-container-item">
                      <p className="about-container-label">languages</p>
                      <p className="about-container-item-desc">
                        HTML, CSS, JavaScript
                      </p>
                    </div>
                    <div className="about-container-item">
                      <p className="about-container-label">frameworks</p>
                      <p className="about-container-item-desc">
                        Bootstrap, Sass, React, Angular
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="skills-swiper-slide">
              <div className="skills-item">
                <h3>Back End Development</h3>
                <div style={{ display: "flex" }}>
                  <div>
                    <div className="about-container-item">
                      <p className="about-container-label">languages</p>
                      <p className="about-container-item-desc">Java</p>
                    </div>
                    <div className="about-container-item">
                      <p className="about-container-label">frameworks</p>
                      <p className="about-container-item-desc">Spring Boot</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="skills-swiper-slide">
              <div className="skills-item">
                <h3>Databases</h3>
                <div style={{ display: "flex" }}>
                  <div>
                    <div className="about-container-item">
                      <p className="about-container-label">Databases</p>
                      <p className="about-container-item-desc">
                        MySQL, MongoDB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="download-cv-container">
          <div className="download-cv-container-left">
            <h2 className="download-cv-container-title">
              Want more information?
            </h2>
            <p>
              For more details, feel free to download my CV and take a look!
            </p>
            <Button variant="btn-outline">
              <span>Download CV</span>
              <DocumentIcon />
            </Button>
          </div>
          <img src={myimage} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
