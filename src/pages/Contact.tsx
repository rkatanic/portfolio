import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Contact = (): JSX.Element => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
