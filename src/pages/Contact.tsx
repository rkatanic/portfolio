import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Contact = (): JSX.Element => {
  const Box = () => {
    const boxRef = useRef<any>();

    useFrame(() => {
      boxRef.current.rotation.y += 0.01;
    });

    return (
      <mesh
        ref={boxRef}
        rotation-x={Math.PI * 0.25}
        rotation-y={Math.PI * 0.25}
      >
        <icosahedronBufferGeometry args={[1.85]} />
        <meshBasicMaterial wireframe color={"hsl(0,0%,30%)"} />
      </mesh>
    );
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    var element = document.getElementById("element-1");
    if (element) element.style.transform = `translateX(-${scrollTop / 80}%)`;
    var element = document.getElementById("element-2");
    if (element) element.style.transform = `translateX(${scrollTop / 70}%)`;

    var element = document.getElementById("element-3");
    if (element) element.style.transform = `translateX(-${scrollTop / 50}%)`;
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <Scroll>
      <h1 className="section-title txt-800">
        <span className="txt-outlined">0</span>3
      </h1>
      <h3
        style={{ transition: "0.5s ease" }}
        className="side-section-title txt-xxs txt-400"
      >
        Get in touch
      </h3>

      <div className="contact-content div-parent">
        <Canvas className="child-shape">
          <Suspense fallback={null}>
            <pointLight position={[5, 5, 5]} />
            <Box />
          </Suspense>
        </Canvas>
        <div className="child-txt">
          <div className="contact-heading">
            <h2 id="element-1" className="txt-xl txt-800">
              <span className="txt-outlined">HA</span>VE{" "}
              <span className="txt-outlined">A</span>
            </h2>
            <h2 id="element-2" className="txt-xl txt-800">
              <span className="txt-outlined">#</span>QUE
              <span className="txt-outlined">S</span>{" "}
            </h2>
            <h2 id="element-3" className="txt-xl txt-800">
              <div className="dash"></div>
              TIO
              <span className="txt-outlined">N?</span>
            </h2>
          </div>
        </div>
      </div>

      <h2 className="txt-md txt-outlined  txt-800">E-MAIL</h2>
      <h3 className="txt-xs txt-600">k.rade313@gmail.com</h3>

      <ContactForm />
    </Scroll>
  );
};

export default Contact;
