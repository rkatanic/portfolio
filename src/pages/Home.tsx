import Typewriter from "typewriter-effect";
import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import myimg from "../assets/images/me1.png";
import "./Home.css";
import Link from "../components/Link";
import Button from "../components/Button";

const Home = (): JSX.Element => (
  <>
    <div className="home-section">
      <div className="home-section-col">
        <img className="home-section-img" src={myimg} alt="" />
        <h3 className="home-section-title">Radivoje Katanic</h3>
        <h2 className="home-section-subtitle">Software Developer</h2>

        <div className="home-section-info">
          <div className="home-section-info-item">
            <span>Age</span>
            <span>26</span>
          </div>

          <div className="home-section-info-item">
            <span>Location</span>
            <span>Doboj</span>
          </div>
          <div className="home-section-info-item">
            <span>Languages</span>
            <span>Serbian, English</span>
          </div>
          <div className="home-section-info-item">
            <span>E-mail</span>
            <span>k.rade313@gmail.com</span>
          </div>
        </div>
      </div>
      <hr />
      <Navigation />
    </div>

    <div className="home-section">
      <h3 className="home-headline">Little bit about me</h3>
      <p className="desc">
        I am a full stack developer located in Doboj, Bosnia & Herzegovina.
        Currently I'm crafting software products at{" "}
        <Link label="ProductDock" href="https://productdock.com/" />
        .
        <br />I do what coders do. I like what coders like. In the end of the
        day, I'm just a regular person who likes doing some sports in free time,
        watching movies and reading all kinds of articles.
      </p>
    </div>
    <ProgressBar />
  </>
);

export default Home;
