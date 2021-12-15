import Typewriter from "typewriter-effect";
import Navigation from "../components/Navigation";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";

import "./Home.css";
import Link from "../components/Link";

const Home = (): JSX.Element => (
  <>
    <div>
      <ProgressBar />
      <h3 className="title">
        Hello, I<span className="primary">'</span>m
        <br /> Radivoje{" "}
        <span className="last-name">
          Katanic.<span className="apostrophe primary">'</span>{" "}
        </span>
      </h3>
      <h3 className="typewriter-headline">
        <Typewriter
          options={{
            cursor: "_",
            strings: ["Web Developer", "Coder"],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
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
    <Navigation />
    <Footer />
  </>
);

export default Home;
