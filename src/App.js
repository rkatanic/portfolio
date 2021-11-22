import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
