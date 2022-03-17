import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "Formik/ErrorField";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group mb-6">
      <label
        className="form-label inline-block mb-2 text-gray-700"
        htmlFor={name}
      >
        {label}:
      </label>
      <Field id={name} name={name} {...rest} className="myclass" />
      <ErrorMessage name={name} component={ErrorField} />
    </div>
  );
}

export default Input;
