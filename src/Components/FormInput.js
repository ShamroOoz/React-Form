import React, { useState } from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="w-full mt-4">
      <span
        className={`${
          Object.keys(inputProps).includes("required") &&
          " after:content-['*'] after:ml-0.5 after:text-red-500"
        } block text-sm font-medium text-slate-700`}
      >
        {label}
      </span>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        className={`peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:valid:focus:ring-green-500  required:valid:border-green-500 
        
        `}
      />
      <div className="errormsg  items-center mt-1 text-red-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
            clipRule="evenodd"
          />
        </svg>
        <p className="ml-1 text-xs">{errorMessage}</p>
      </div>
    </div>
  );
};

export default FormInput;
