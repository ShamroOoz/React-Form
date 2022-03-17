import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "Formik/ErrorField";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control mt-2">
      {/* <label>{label}</label> */}
      <Field name={name} {...rest} component={Option} options={options} />
      <ErrorMessage component={ErrorField} name={name} />
    </div>
  );
}
export default RadioButtons;

const Option = (props) => {
  const { field, options, ...rest } = props;
  return options.map((option) => {
    return (
      <React.Fragment key={option.key}>
        <input
          type="radio"
          id={option.value}
          {...field}
          {...rest}
          value={option.value}
          checked={field.value === option.value}
          className=" rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain   cursor-pointer"
        />
        <label
          htmlFor={option.value}
          className="inline-block text-gray-800 mr-2"
        >
          {option.key}
        </label>
      </React.Fragment>
    );
  });
};
