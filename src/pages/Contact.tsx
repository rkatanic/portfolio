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
  return (
    <Scroll>
      <h1 className="section-title txt-lg txt-800">
        <span className="txt-outlined">0</span>3
      </h1>
      <h3 className="side-section-title txt-xxs txt-400">Get In Touch</h3>

      <div className="contact-content div-parent">
        <Canvas className="child-shape">
          <Suspense fallback={null}>
            <pointLight position={[5, 5, 5]} />
            <Box />
          </Suspense>
        </Canvas>
        <div className="child-txt">
          <div className="contact-heading">
            <h2 className="txt-xl txt-800">
              <span className="txt-outlined">HA</span>VE{" "}
              <span className="txt-outlined">A</span>
            </h2>
            <h2 className="txt-xl txt-800">
              <span className="txt-outlined">#</span>QUE
              <span className="txt-outlined">S</span>{" "}
            </h2>
            <h2 className="txt-xl txt-800">
              <div className="dash"></div>
              TIO
              <span className="txt-outlined">N?</span>
            </h2>
          </div>
        </div>
      </div>

      <ContactForm />
    </Scroll>
  );
};

export default Contact;
