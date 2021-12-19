import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";
import Link from "../components/Link";
import Card from "../components/Card";
import IconButton from "../components/IconButton";
import myimg from "../assets/images/me1.png";
import { ReactComponent as PatternIcon } from "../assets/icons/pattern.svg";

import "./Home.css";
import { useState } from "react";

const Home = (): JSX.Element => {
  const gradients = [
    "diagonal",
    "dot",
    "marakesh",
    "cube",
    "zig-zag",
    "tartan",
    "seigaiha",
    "waves",
    "stripes",
    "aztec",
  ];
  const [gradient, setGradient] = useState(gradients[0]);

  const handleGradientSwitch = (): void => {
    let currentIndex = gradients.indexOf(gradient);
    const nextIndex = ++currentIndex % gradients.length;
    setGradient(gradients[nextIndex]);
  };
  return (
    <>
      <div className={`home-section gradient-${gradient}`}>
        <div className="home-section-header">
          <div className="gradient-button">
            <IconButton icon={<PatternIcon />} onClick={handleGradientSwitch} />
          </div>

          <img className="home-section-img" src={myimg} alt="" />

          <h3 className="home-section-title">Radivoje Katanić</h3>
          <h2 className="home-section-subtitle">Software Developer</h2>
        </div>

        <div className="home-section-info">
          <div className="home-section-info-item">
            <span>Age</span>
            <span>{new Date().getFullYear() - 1996}</span>
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
            <span>
              k.rade313<b className="primary">@</b>gmail.com
            </span>
          </div>
        </div>
        <hr />
        <Navigation />
      </div>

      <Card title="Few words about me">
        <p className="desc">
          I am a full stack developer located in Doboj, Bosnia & Herzegovina.
          Currently crafting web solutions at{" "}
          <Link label="ProductDock" href="https://productdock.com/" />
          .
          <br />I do what coders do. I like what coders like. In the end of the
          day, I'm just a regular person who likes doing some sports in free
          time, watching movies and reading all kinds of articles.
        </p>
      </Card>

      <ProgressBar />
    </>
  );
};

export default Home;
