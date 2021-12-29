import "./Button.css";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "btn-primary" | "btn-outline";
  label: string | JSX.Element;
}

const Button = ({
  onClick,
  disabled,
  type = "button",
  variant = "btn-primary",
  label,
}: Props): JSX.Element => (
  <button
    disabled={disabled}
    className={`btn ${variant}`}
    onClick={onClick}
    type={type}
  >
    <span className="txt-xs txt-600">{label}</span>
  </button>
);

export default Button;
