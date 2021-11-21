import "./Section.css";

interface Props {
  id: string;
  children: JSX.Element | JSX.Element[];
}

const Section = ({ id, children }: Props): JSX.Element => (
  <section id={id} className="section">
    {children}
  </section>
);

export default Section;
