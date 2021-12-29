import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";
import FormField from "./FormField";
import Button from "../Button";
import ContactFormModal from "./ContactFormModal";
import Loader from "../Loader";
import {
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA,
} from "../../util/constants/form";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as AtIcon } from "../../assets/icons/at.svg";
import { ReactComponent as EmailSubjectIcon } from "../../assets/icons/email-subject.svg";
import { ReactComponent as EmailSendIcon } from "../../assets/icons/email-send.svg";

import "./ContactForm.css";

const ContactForm = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleModalClose = (): void => setIsContactModalOpen(false);

  const handleEmailSend = async (
    values: Record<string, unknown>,
    setSubmitting: (flag: boolean) => void
  ): Promise<void> => {
    try {
      setSubmitting(true);
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID ?? "email_service_id",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID ?? "email_template_id",
        values,
        process.env.REACT_APP_EMAIL_USER_ID ?? "email_user_id"
      );
      setSubmitting(false);
      setIsSuccess(true);
      setIsContactModalOpen(true);
    } catch (err) {
      setSubmitting(false);
      setIsSuccess(false);
      setIsContactModalOpen(true);
    }
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={FORM_VALIDATION_SCHEMA}
      onSubmit={(values, { setSubmitting }): Promise<void> =>
        handleEmailSend(values, setSubmitting)
      }
    >
      {({ isValid, values, isSubmitting }): JSX.Element => (
        <Form className="contact-form">
          <FormField
            maxLength={50}
            aria-label="name"
            name="name"
            value={values.name}
            placeholder="Enter your name"
          />
          <FormField
            maxLength={100}
            aria-label="email"
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          <FormField
            maxLength={100}
            aria-label="subject"
            name="subject"
            value={values.subject}
            placeholder="Enter your subject"
          />
          <FormField
            maxLength={500}
            as="textarea"
            rows={10}
            aria-label="message"
            name="message"
            value={values.message}
            placeholder="Enter your message"
          />
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            label={
              isSubmitting ? (
                <>
                  <Loader />
                  Sending...
                </>
              ) : (
                "SEND E-MAIL"
              )
            }
          />
          <ContactFormModal
            isSuccess={isSuccess}
            isOpen={isContactModalOpen}
            closeModal={handleModalClose}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
