import "./Section.css";

const Section = (props) => (
  <section id={props.id} className="section">
    {props.children}
  </section>
);

export default Section;
