import { Field, ErrorMessage, useField } from "formik";

import "./FormField.css";

const FormField = (props: any): JSX.Element => {
  const [field, meta] = useField(props);
  return (
    <div className="form-field">
      <div className="form-field-label">
        <label htmlFor={field.name}>{field.name}*</label>
        <ErrorMessage
          name={field.name}
          component="div"
          className={
            meta.touched && meta.error ? "input-error-message" : undefined
          }
        />
      </div>
      <Field
        {...props}
        className={meta.touched && meta.error ? "input-error-field" : undefined}
      />
    </div>
  );
};

export default FormField;