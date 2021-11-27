import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import Rellax from "rellax";
import Skills from "./components/Skills";
import { ReactComponent as MoonIcon } from "./assets/icons/moon-icon.svg";
import { ReactComponent as Satellite1Icon } from "./assets/icons/satellite-1.svg";
import { ReactComponent as CometIcon } from "./assets/icons/comet.svg";

const App = () => {
  const relax = new Rellax(".rellax");
  return (
    <div className="App">
      <Navigation />

      <div class="parallax">
        <MoonIcon />
        <Satellite1Icon />

        <div class="fixed">
          <div>
            <Home />
            <About />
            <Skills />
            <Contact />
          </div>
          <div className="item second"></div>

          <div class="item third" data-rellax-speed="-4"></div>

          <div class="item fourth"></div>

          <div class="item fifth"></div>
          <div class="item first" data-rellax-speed="3"></div>
          <div class="item second" data-rellax-speed="6"></div>
          <div class="item third"></div>
          <div class="item fourth"></div>
          <div class="item fifth"></div>

          <h2 class="caption">Folow @ArtagnanDev</h2>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="starfield">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back2">
          <div class="starfield">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back3">
          <div class="starfield">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="starfield">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
