import "./Button.css";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "btn-primary" | "btn-outline";
  label: string | JSX.Element;
  icon?: JSX.Element;
}

const Button = ({
  onClick,
  disabled,
  type = "button",
  variant = "btn-primary",
  label,
  icon,
}: Props): JSX.Element => (
  <button
    disabled={disabled}
    className={`btn ${variant}`}
    onClick={onClick}
    type={type}
  >
    <span className="btn-content btn-label">{label}</span>
    {icon && <div className="btn-content btn-icon">{icon}</div>}
  </button>
);

export default Button;
