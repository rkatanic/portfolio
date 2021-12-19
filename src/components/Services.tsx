import { ReactComponent as CodeIcon } from "../assets/icons/code.svg";
import Card from "./Card";

import "./Services.css";

const Services = (): JSX.Element => (
  <div className="services">
    <Card title="Services I provide">
      <div className="card-row">
        <div className="card-icon">
          <CodeIcon />
        </div>
        <div className="card-content">
          <div className="card-content-header-title">Front-End Development</div>
          <div className="card-content-header-subtitle">
            <b className="badge">HTML</b> <b className="badge">CSS</b>
            <b className="badge">JavaScript</b> <b className="badge">Sass</b>
            <b className="badge">React</b> <b className="badge">Angular</b>
          </div>
          <div className="card-content-desc">
            Using modern languages and frameworks, I can develop fast and
            responsive single-page client applications.
          </div>
        </div>
      </div>
      <hr />
      <div className="card-row">
        <div className="card-icon">
          <CodeIcon />
        </div>
        <div className="card-content">
          <div className="card-content-header-title">Back-End Development</div>
          <div className="card-content-header-subtitle">
            <b className="badge">Java</b>
            <b className="badge">Spring Boot</b>
            <b className="badge">MySQL</b>
            <b className="badge">MongoDB</b>
          </div>
          <div className="card-content-desc">
            I can develop scalable and maintainable server applications with
            Java, using Spring Boot framework.
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default Services;
