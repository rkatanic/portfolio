import "./Services.css";

const Services = (): JSX.Element => (
  <>
    <h3 className="headline">Services I provide</h3>
    <div className="service-cards">
      <div className="service-card">
        <div className="service-card-content">
          <h3 className="card-title">Front-End Development</h3>
          <p className="service-card-content-desc">
            Using modern languages and frameworks, I can develop fast and
            responsive single-page client applications.
          </p>
          <div className="service-card-content-badges">
            <b className="service-card-content-badge">HTML</b>
            <b className="service-card-content-badge">CSS</b>
            <b className="service-card-content-badge">JavaScript</b>
            <b className="service-card-content-badge">Sass</b>
            <b className="service-card-content-badge">React</b>
            <b className="service-card-content-badge">Angular</b>
          </div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card-content">
          <h3 className="card-title">Back-End Development</h3>
          <p className="service-card-content-desc">
            I can develop scalable and maintainable server applications in Java,
            using Spring Boot framework.
          </p>
          <div className="service-card-content-badges">
            <b className="service-card-content-badge">Java</b>
            <b className="service-card-content-badge">Spring Boot</b>
            <b className="service-card-content-badge">MySQL</b>
            <b className="service-card-content-badge">MongoDB</b>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services;
