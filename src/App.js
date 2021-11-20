import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
