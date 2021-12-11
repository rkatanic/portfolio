import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { COLORS } from "../util/constants/colors";

import "./ColorModal.css";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  switchColor: (colorValue: number) => void;
}

const ColorModal = ({
  isOpen,
  closeModal,
  switchColor,
}: Props): JSX.Element => {
  const selectedColor = Number(window.localStorage.getItem("color")?.valueOf());
  return (
    <Modal
      style={{ overlay: { zIndex: "100", background: "rgb(0,0,0,0.5)" } }}
      className="color-modal"
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <CloseIcon onClick={closeModal} />

      <h3 className="color-modal-title">Choose your favourite color</h3>
      <div className="color-list">
        {COLORS.map(
          ({ key, value }): JSX.Element => (
            <div
              data-testid={`color-item-${value}`}
              onClick={() => switchColor(value)}
              key={key}
              className="color-item"
              style={{
                background: `hsl(${value},70%,60%)`,
              }}
            >
              {selectedColor === value && <CheckIcon />}
            </div>
          )
        )}
      </div>
    </Modal>
  );
};

export default ColorModal;
