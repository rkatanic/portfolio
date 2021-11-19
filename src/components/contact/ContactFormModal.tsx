import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success.svg";

import "./ContactFormModal.css";

const ContactFormModal = (props: any) => {
  return (
    <Modal
      style={{ overlay: { zIndex: "100", background: "rgb(0,0,0,0.5)" } }}
      className="contact-form-modal"
      ariaHideApp={false}
      {...props}
      onRequestClose={props.closeModal}
    >
      <CloseIcon onClick={props.closeModal} />
      <div className="contact-form-modal-content">
        {props.isSuccess ? (
          <>
            <SuccessIcon />
            <h3>Email successfully sent</h3>
            <p>Thanks for reaching out to me!</p>
            <p>I will respond as soon as possible.</p>
          </>
        ) : (
          <>
            <h3>Failed to send email</h3>
            <p>Oh no, something went wrong.</p>
            <p>Please try sending message again.</p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ContactFormModal;