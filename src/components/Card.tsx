import "./Card.css";

interface Props {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}
const Card = ({ title, children }: Props) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    {children}
  </div>
);

export default Card;
