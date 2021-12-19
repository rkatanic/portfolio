import "./Card.css";

interface Props {
  title: string | JSX.Element;
  children: React.ReactElement | React.ReactElement[];
}

const Card = ({ title, children }: Props): JSX.Element => (
  <div data-tilt className="card">
    <h3 className="card-title">{title}</h3>
    {children}
  </div>
);

export default Card;
