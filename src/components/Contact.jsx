import { useState } from "react";
import Section from "./Section";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./Contact.css";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be atleast 2 characters long")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string()
      .min(4, "Subject must be atleast 4 characters long")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be atleast 10 characters long")
      .max(500, "Message can not be longer than 500 characters")
      .required("Message is required"),
  });

  const formikInitialValues = {
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
    <Section id="contact">
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-subtitle">Don't hesitate to ask anything</h3>

        <div className="contact-container">
          <div className="contact-links">
            <div className="contact-link">
              <EmailIcon />
              <div className="contact-link-info">
                <h3>Email</h3>
                <p>k.rade313@gmail.com</p>
              </div>
            </div>
            <div className="contact-link">
              <LinkedinIcon />
              <div className="contact-link-info">
                <h3>LinkedIn</h3>
                <p>k.rade313@gmail.com</p>
              </div>
            </div>
            <div className="contact-link">
              <GithubIcon />
              <div className="contact-link-info">
                <h3>GitHub</h3>
                <p>k.rade313@gmail.com</p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={formikInitialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) =>
              handleEmailSend(values, setSubmitting)
            }
          >
            {({ isValid, dirty, values, errors, touched, isSubmitting }) => (
              <Form className="contact-form">
                <Field
                  placeholder="Enter your name"
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  className={errors.name && touched.name ? "input-error" : null}
                />
                <ErrorMessage name="name" />
                <Field
                  placeholder="Enter your email"
                  type="email"
                  email="email"
                  id="email"
                  name="email"
                  value={values.email}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" />
                <Field
                  placeholder="Enter your subject"
                  type="subject"
                  subject="subject"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  className={
                    errors.subject && touched.subject ? "input-error" : null
                  }
                />
                <ErrorMessage name="subject" />
                <Field
                  as="textarea"
                  placeholder="Enter your message"
                  type="message"
                  message="message"
                  id="message"
                  name="message"
                  value={values.message}
                  className={
                    errors.message && touched.message ? "input-error" : null
                  }
                />
                <ErrorMessage name="message" />
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="btn btn-primary"
                >
                  {isSubmitting ? "Sending ..." : "Send email"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
