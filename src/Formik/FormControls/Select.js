import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "Formik/ErrorField";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control mb-6 flex ">
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="dropdown relative">
        <Field
          as="select"
          id={name}
          name={name}
          {...rest}
          className="dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap"
        >
          {options.map((option) => {
            return <Option key={option.value} option={option} />;
          })}
        </Field>
        <ErrorMessage component={ErrorField} name={name} />
      </div>
    </div>
  );
}

export default Select;

const Option = ({ option }) => {
  return (
    <option
      key={option.value}
      value={option.value}
      className="dropdown-item text-sm   py-2  px-4  font-normal  block  w-full whitespace-nowrap bg-transparent text-gray-70 hover:bg-gray-100"
    >
      {option.key}
    </option>
  );
};
