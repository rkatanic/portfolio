import "./IconButton.css";

interface Props {
  icon: JSX.Element;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick, ...props }: Props): JSX.Element => (
  <button {...props} className="icon-button" type="button" onClick={onClick}>
    {icon}
  </button>
);

export default IconButton;
