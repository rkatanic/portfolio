import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as SuccessIcon } from "../../assets/icons/check.svg";

import "./ContactFormModal.css";

interface Props {
  isSuccess: boolean;
  isOpen: boolean;
  closeModal: () => void;
}

const ContactFormModal = ({
  isSuccess,
  isOpen,
  closeModal,
}: Props): JSX.Element => (
  <Modal
    style={{ overlay: { zIndex: "100", background: "rgb(0,0,0,0.5)" } }}
    className=" modal contact-form-modal"
    ariaHideApp={false}
    isOpen={isOpen}
    onRequestClose={closeModal}
  >
    <CloseIcon onClick={closeModal} />
    <div className="contact-form-modal-content">
      {isSuccess ? (
        <>
          <div className="contact-form-modal-content-row">
            <div className="contact-form-modal-content-icon">
              <SuccessIcon />
            </div>
            <h3 className="headline">
              Email <br />
              successfully <br />
              sent
            </h3>
          </div>
          <span>Thanks for reaching me out!</span>
          <span>I will respond as soon as possible.</span>
        </>
      ) : (
        <>
          <div className="contact-form-modal-content-row">
            <div className="contact-form-modal-content-icon">!</div>
            <h3 className="headline">
              Sending <br />
              email <br />
              failed
            </h3>
          </div>
          <span>Oh no, something went wrong.</span>
          <span>Please try sending message later.</span>
        </>
      )}
    </div>
  </Modal>
);

export default ContactFormModal;
