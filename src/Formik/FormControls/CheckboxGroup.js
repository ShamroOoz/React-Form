import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "Formik/ErrorField";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      {/* <label>{label}</label> */}
      <Field name={name} {...rest} component={Option} options={options} />
      <ErrorMessage component={ErrorField} name={name} />
    </div>
  );
}

export default CheckboxGroup;

const Option = (props) => {
  const { field, options, ...rest } = props;
  return options.map((option) => {
    return (
      <React.Fragment key={option.key}>
        <input
          type="checkbox"
          id={option.value}
          {...field}
          {...rest}
          value={option.value}
          checked={field?.value?.includes(option.value)}
          className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
        />
        <label
          htmlFor={option.value}
          className="inline-block text-gray-800 mr-3"
        >
          {option.key}
        </label>
      </React.Fragment>
    );
  });
};
