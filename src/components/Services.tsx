import { ReactComponent as CodeIcon } from "../assets/icons/code.svg";

import "./Services.css";

const Services = (): JSX.Element => (
  <>
    <div className="service-cards">
      <h3 className="section-headline">Services I provide</h3>
      <div className="service-card">
        <div className="card-icon">
          <CodeIcon />
        </div>
        <div className="card-content">
          <div className="card-heading">Front-End Development</div>
          <div className="card-subtitle">
            <b className="badge">HTML</b> <b className="badge">CSS</b>
            <b className="badge">JavaScript</b> <b className="badge">Sass</b>
            <b className="badge">React</b> <b className="badge">Angular</b>
          </div>
          <div className="card-desc">
            Using modern languages and frameworks, I can develop fast and
            responsive single-page client applications.
          </div>
        </div>
      </div>
      <hr />
      <div className="service-card">
        <div className="card-icon">
          <CodeIcon />
        </div>
        <div className="card-content">
          <div className="card-heading">Back-End Development</div>
          <div className="card-subtitle">
            <b className="badge">Java</b>
            <b className="badge">Spring Boot</b>
            <b className="badge">MySQL</b>
            <b className="badge">MongoDB</b>
          </div>
          <div className="card-desc">
            I can develop scalable and maintainable server applications with
            Java, using Spring Boot framework.
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services;
