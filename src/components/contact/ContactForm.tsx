import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import Button from "../Button";
import { ReactComponent as SandWatchIcon } from "../../assets/icons/sandwatch.svg";
import ContactFormModal from "./ContactFormModal";

import "./ContactForm.css";

const ContactForm = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Must be atleast 2 chars long")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    subject: Yup.string()
      .min(4, "Must be atleast 4 chars long")
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
            name="name"
            value={values.name}
            placeholder="Enter your name"
          />
          <FormField
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          <FormField
            name="subject"
            value={values.subject}
            placeholder="Enter your subject"
          />
          <FormField
            as="textarea"
            rows={10}
            name="message"
            value={values.message}
            placeholder="Enter your message"
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <>
                <SandWatchIcon />
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
