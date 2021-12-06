import { ReactComponent as CodeIcon } from "../assets/icons/code.svg";

import "./Services.css";

const Services = (): JSX.Element => (
  <>
    <h3 className="headline">Services I provide</h3>
    <div className="service-card">
      <div className="service-card-icon">
        <CodeIcon />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-content-title">Front End Development</h3>
        <p className="service-card-content-desc">
          Using <b className="service-card-content-badge">HTML</b>,
          <b className="service-card-content-badge"> CSS</b>,
          <b className="service-card-content-badge"> Javascript</b>, and
          frameworks such as
          <b className="service-card-content-badge"> React</b> or
          <b className="service-card-content-badge"> Angular</b>, I can build
          fast, responsive and interactive client-side applications.
        </p>
        <div className="service-card-binary">
          <p className="service-card-binary-text service-card-binary-text-up">
            10100101000000010111111000001001010
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10010101010101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10001010100000001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10111010101010101010000100001000011
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10101010100000001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10000101110101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10101010111100001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10000101110101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10100101000000010111111000001001010
          </p>
        </div>
      </div>
    </div>
    <div className="service-card">
      <div className="service-card-icon">
        <CodeIcon />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-content-title">Back End Development</h3>
        <p className="service-card-content-desc">
          Building scalable and maintainable server applications in
          <b className="service-card-content-badge"> Java</b>, using
          <b className="service-card-content-badge"> Spring Boot</b> framework
          and databases such as
          <b className="service-card-content-badge"> MySQL</b> or
          <b className="service-card-content-badge"> MongoDB</b>.
        </p>
        <div className="service-card-binary">
          <p className="service-card-binary-text service-card-binary-text-up">
            10100101000000010111111000001001010
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10010101010101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10001010100000001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10111010101010101010000100001000011
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10101010100000001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10000101110101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10101010111100001011111100000100101
          </p>
          <p className="service-card-binary-text service-card-binary-text-down">
            10000101110101010000100001000010101
          </p>
          <p className="service-card-binary-text service-card-binary-text-up">
            10100101000000010111111000001001010
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Services;
