import "./Link.css";

interface Props {
  label?: string | JSX.Element;
  icon?: JSX.Element;
  href: string;
}

const Link = ({ label, icon, href }: Props): JSX.Element => (
  <a className="link" href={href} target="_blank" rel="noopener noreferrer">
    {icon && <div className="link-icon">{icon}</div>}
    {label && <span className="link-label">{label}</span>}
  </a>
);

export default Link;
