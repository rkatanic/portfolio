import Section from "./Section";
import Button from "./Button";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import myimage from "../assets/images/me1.png";
import { ReactComponent as MailSendIcon } from "../assets/icons/mail-send.svg";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-up.svg";

import "./Home.css";
import { useEffect, useState } from "react";

const Home = (): JSX.Element => {
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  let f = 0;
  let g = 0;
  let h = 0;
  let i = 0;
  let j = 0;
  const textOne = "fetching data for Radivoje ...";
  const textTwo = "Radivoje successfully found!";
  const textThree = "// Full name: Radivoje Katanic";
  const textFour = "// Age: 25";
  const textFive = "// Location: Doboj";
  const textSix = "processing some more information ...";
  const textSeven = "Additional information";
  const textEight = "// Role: Software Developer";
  const textNine =
    "// Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus doloremque unde dicta consectetur fugiat, magni ipsa nihil esse vel eaque reprehenderit odio, maxime soluta tempora repellat cum possimus facere.";

  const speedOne = 50;
  const speedTwo = 5;
  const speedThree = 1;

  const typeWriterOne = () => {
    if (a < textOne.length) {
      document.getElementById("typer-one")!.innerHTML += textOne.charAt(a);
      a++;
      setTimeout(typeWriterOne, speedOne);
    }
  };

  const typeWriterTwo = () => {
    if (b < textTwo.length) {
      document.getElementById("typer-two")!.innerHTML += textTwo.charAt(b);
      b++;
      setTimeout(typeWriterTwo, speedTwo);
    }
  };

  const typeWriterThree = () => {
    if (c < textThree.length) {
      document.getElementById("typer-three")!.innerHTML += textThree.charAt(c);
      c++;
      setTimeout(typeWriterThree, speedOne);
    }
  };

  const typeWriterFour = () => {
    if (d < textFour.length) {
      document.getElementById("typer-four")!.innerHTML += textFour.charAt(d);
      d++;
      setTimeout(typeWriterFour, speedOne);
    }
  };

  const typeWriterFive = () => {
    if (e < textFive.length) {
      document.getElementById("typer-five")!.innerHTML += textFive.charAt(e);
      e++;
      setTimeout(typeWriterFive, speedTwo);
    }
  };

  const typeWriterSix = () => {
    if (f == 0) {
      let prefix = document.createElement("b");
      prefix.className = "color-primary";
      prefix.innerHTML = "$> ";
      document.getElementById("typer-six")?.appendChild(prefix);
    }
    if (f < textSix.length) {
      document.getElementById("typer-six")!.innerHTML += textSix.charAt(f);
      f++;
      setTimeout(typeWriterSix, speedTwo);
    }
  };

  const typeWriterSeven = () => {
    if (g < textSeven.length) {
      document.getElementById("typer-seven")!.innerHTML += textSeven.charAt(g);
      g++;
      setTimeout(typeWriterSeven, speedThree);
    }
  };

  const typeWriterEight = () => {
    if (h < textEight.length) {
      document.getElementById("typer-eight")!.innerHTML += textEight.charAt(h);
      h++;
      setTimeout(typeWriterEight, speedOne);
    }
  };

  const typeWriterNine = () => {
    if (i < textNine.length) {
      document.getElementById("typer-nine")!.innerHTML += textNine.charAt(i);
      i++;
      setTimeout(typeWriterNine, speedTwo);
    }
  };
  useEffect(() => {
    setTimeout(() => typeWriterOne(), 500);
    setTimeout(() => typeWriterTwo(), 3500);
    setTimeout(() => typeWriterThree(), 4000);
    setTimeout(() => typeWriterFour(), 5500);
    setTimeout(() => typeWriterFive(), 6500);
    setTimeout(() => typeWriterSix(), 7000);
    setTimeout(() => typeWriterSeven(), 7300);
    setTimeout(() => typeWriterEight(), 8000);
    setTimeout(() => typeWriterNine(), 8200);
  }, []);

  return (
    <Section id="home">
      <div className="home">
        <p className="comment white" id="typer-one">
          <b className="color-primary">${"> "}</b>
        </p>
        <h3 className="color-primary" id="typer-two"></h3>

        <p className="comment" id="typer-three"></p>
        <p className="comment" id="typer-four"></p>
        <p className="comment" id="typer-five"></p>
        <p className="comment white" id="typer-six"></p>

        <h3 className="color-primary" id="typer-seven"></h3>
        <p className="comment" id="typer-eight"></p>
        <p className="comment" id="typer-nine"></p>

        {/*  <div className="home-content">
          <h3 className="home-title">
            I am&nbsp;
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("a software developer.")
                  .deleteAll()
                  .typeString("a coder")
                  .deleteAll();
              }}
            />
          </h3>
          <h3 className="home-subtitle">Software Developer</h3>
          <p className="home-description">
            My main focus is on building efficient web apps that work across all
            platforms and browsers. Building web solutions is my satisfaction.
            Sometimes a problem solving can be relaxing too.
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            <span> Contact me</span>
            <MailSendIcon />
          </Button>
          <a className="scroll-down" href="#about">
            <div className="scroll-down-container">
              <div className="scroll-down-bubble"></div>
            </div>
            Read more <ArrowIcon />
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Home;
