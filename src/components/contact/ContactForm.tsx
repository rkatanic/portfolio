import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import Button from "../Button";
import ContactFormModal from "./ContactFormModal";
import Loader from "../Loader";

import "./ContactForm.css";

const ContactForm = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Must be atleast 2 chars long")
      .max(40, "Must be less than 40 chars long")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .min(8, "Must be atleast 8 chars long")
      .max(100, "Must be less than 100 chars long")
      .required("Required"),
    subject: Yup.string()
      .min(4, "Must be atleast 4 chars long")
      .max(100, "Must be less than 100 chars long")
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be atleast 10 chars long")
      .max(500, "Must be less than 500 chars long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

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
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }): Promise<void> =>
        handleEmailSend(values, setSubmitting)
      }
    >
      {({ isValid, values, isSubmitting }): JSX.Element => (
        <Form className="contact-form">
          <FormField
            aria-label="name"
            name="name"
            value={values.name}
            placeholder="Enter your name"
          />
          <FormField
            aria-label="email"
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          <FormField
            aria-label="subject"
            name="subject"
            value={values.subject}
            placeholder="Enter your subject"
          />
          <FormField
            as="textarea"
            rows={10}
            aria-label="message"
            name="message"
            value={values.message}
            placeholder="Enter your message"
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader />
                Sending...
              </>
            ) : (
              "Send email"
            )}
          </Button>
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
