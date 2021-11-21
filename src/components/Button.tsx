import "./Button.css";

interface Props {
  onClick?: () => void;
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "btn-primary" | "btn-outline";
}

const Button = ({
  onClick,
  children,
  disabled,
  type = "button",
  variant = "btn-primary",
}: Props): JSX.Element => (
  <button
    disabled={disabled}
    className={`btn ${variant}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
