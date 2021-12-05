import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

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
  const colors: { key: string; value: number }[] = [
    { key: "red", value: 0 },
    { key: "red2", value: 10 },
    { key: "orange", value: 20 },
    { key: "orange2", value: 30 },
    { key: "yellow", value: 40 },
    { key: "yellow2", value: 50 },
    { key: "yellow3", value: 60 },
    { key: "yellow4", value: 70 },
    { key: "yellow5", value: 80 },
    { key: "green", value: 90 },
    { key: "green2", value: 100 },
    { key: "green3", value: 110 },
    { key: "green4", value: 120 },
    { key: "green5", value: 130 },
    { key: "teal", value: 140 },
    { key: "teal2", value: 150 },
    { key: "teal3", value: 160 },
    { key: "aqua", value: 170 },
    { key: "aqua2", value: 180 },
    { key: "aqua3", value: 190 },
    { key: "blue", value: 200 },
    { key: "blue2", value: 210 },
    { key: "blue3", value: 220 },
    { key: "blue4", value: 230 },
    { key: "purple", value: 240 },
    { key: "purple2", value: 250 },
    { key: "purple3", value: 260 },
    { key: "purple4", value: 270 },
    { key: "pink", value: 280 },
    { key: "pink2", value: 290 },
  ];

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
      <div className="color-dropdown-list">
        {colors.map(
          ({ key, value }): JSX.Element => (
            <div
              onClick={() => switchColor(value)}
              key={key}
              className="color-dropdown-item"
              style={{
                background: `hsl(${value},70%,60%)`,
              }}
            ></div>
          )
        )}
      </div>
    </Modal>
  );
};

export default ColorModal;
