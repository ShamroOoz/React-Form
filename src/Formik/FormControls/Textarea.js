import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "Formik/ErrorField";

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group mb-6">
      <label
        className="form-label inline-block mb-2 text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="myclass"
      />
      <ErrorMessage component={ErrorField} name={name} />
    </div>
  );
}

export default Textarea;
