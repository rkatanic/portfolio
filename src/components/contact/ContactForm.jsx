import emailjs from "emailjs-com";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import { ReactComponent as SandWatchIcon } from "../../assets/icons/sandwatch.svg";

import "./ContactForm.css";

const ContactForm = () => {
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

  const handleEmailSend = async (values, setSubmitting) => {
    console.log(values);
    try {
      setSubmitting(true);
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAIL_USER_ID
      );
      setSubmitting(false);
    } catch (err) {
      alert(err.text);
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleEmailSend(values, setSubmitting)
      }
    >
      {({ isValid, values, isSubmitting }) => (
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
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? (
              <>
                <SandWatchIcon />
                Sending...
              </>
            ) : (
              "Send email"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
