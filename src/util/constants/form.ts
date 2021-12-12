import * as Yup from "yup";

export const FORM_VALIDATION_SCHEMA = Yup.object({
  name: Yup.string()
    .min(2, "Must be atleast 2 chars long")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .min(8, "Must be atleast 8 chars long")
    .required("Required"),
  subject: Yup.string()
    .min(4, "Must be atleast 4 chars long")
    .required("Required"),
  message: Yup.string()
    .min(10, "Must be atleast 10 chars long")
    .required("Required"),
});

export const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
