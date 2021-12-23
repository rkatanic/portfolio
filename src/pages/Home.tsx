import "./Home.css";
import human from "../assets/images/human.png";
import planet from "../assets/images/planet.png";
import laptop from "../assets/images/laptop.png";
import board from "../assets/images/board.png";
import picture from "../assets/images/picture.png";
import couch from "../assets/images/couch.png";
import message from "../assets/images/message.png";
import message2 from "../assets/images/message2.png";

const Home = (): JSX.Element => {
  const handleMainDescDisplay = () => {
    document.getElementById("main-desc")!.style.opacity = "1";
    document.getElementById("main-desc")!.style.transform = "translateY(0px)";
  };

  const handleMainDescHide = () => {
    document.getElementById("main-desc")!.style.opacity = "0";
    document.getElementById("main-desc")!.style.transform = "translateY(-15px)";
  };
  return (
    <div className="home">
      <div className="home-content">
        <div id="main-desc" className="main-headline">
          Hello, I'm Radivoje Katanić, a software developer located in Doboj,
          Bosnia & Herzegovina.
        </div>
        <div className="bubble">
          <img id="human" src={human} alt="" />
          <img id="planet" src={planet} alt="" />
          <img id="laptop" src={laptop} alt="" />
          <img id="board" src={board} alt="" />
          <img id="picture" src={picture} alt="" />
          <img id="couch" src={couch} alt="" />
          <img id="message" src={message} alt="" />
          <img id="message2" src={message2} alt="" />
          <img id="message3" src={message2} alt="" />
          <div
            onMouseEnter={handleMainDescHide}
            onMouseLeave={handleMainDescDisplay}
            className="pinpoint"
            id="pinpoint-1"
          ></div>
          <div className="item" id="text-1">
            This is first pinpoint text.
          </div>
          <div
            onMouseEnter={handleMainDescHide}
            onMouseLeave={handleMainDescDisplay}
            className="pinpoint"
            id="pinpoint-2"
          ></div>
          <div className="item" id="text-2">
            This is second pinpoint text.
          </div>
          <div
            onMouseEnter={handleMainDescHide}
            onMouseLeave={handleMainDescDisplay}
            className="pinpoint"
            id="pinpoint-3"
          ></div>
          <div className="item" id="text-3">
            This is third pinpoint text.
          </div>
          <div
            onMouseEnter={handleMainDescHide}
            onMouseLeave={handleMainDescDisplay}
            className="pinpoint"
            id="pinpoint-4"
          ></div>
          <div className="item" id="text-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            eaque aperiam doloremque quam laudantium velit voluptate officiis
            hic.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
