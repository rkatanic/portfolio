import { Field, ErrorMessage, useField } from "formik";

import "./FormField.css";

const FormField = (props: any): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <div className="form-field">
      <div className="form-field-label">
        <label htmlFor={field.name}>
          {field.name}
          <span className="primary">*</span>
        </label>
        <ErrorMessage
          name={field.name}
          component="div"
          className={meta.touched && meta.error ? "input-error-message" : ""}
        />
      </div>
      <Field
        {...props}
        className={meta.touched && meta.error ? "input-error-field" : ""}
      />
      <div className="form-field-length-indicator">
        <span
          className={`${
            field.value.length == props.maxLength ? "primary" : ""
          }`}
        >
          {field.value.length}
        </span>{" "}
        / <span>{props.maxLength}</span>
      </div>
    </div>
  );
};

export default FormField;
