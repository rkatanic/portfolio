import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";
import Card from "../components/Card";
import Scroll from "../components/Scroll";

const Contact = (): JSX.Element => (
  <Scroll>
    <div className="txt-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
      corrupti animi dolor itaque, reprehenderit, illo magni architecto
      necessitatibus quos labore similique repellendus asperiores earum aperiam,
      numquam vel a recusandae ut.
    </div>
    <ContactForm />
  </Scroll>
);

export default Contact;
