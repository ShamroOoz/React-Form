import React from "react";

const Input = ({ label, type, name, id, placeholder, register, errors }) => {
  return (
    <div>
      <div>
        <label
          htmlFor={id}
          className="text-sm text-gray-700 block mb-1 font-medium"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className={`rounded py-1 px-3 block w-full border ${
            errors[name]
              ? "bg-red-50 border border-red-400 rounded py-1 px-3 block focus:ring-red-500 focus:border-red-500 text-gray-700 outline-none"
              : "bg-gray-50 border-gray-400  focus:ring-gray-500 focus:border-gray-500 text-gray-700 outline-green-400"
          }`}
          placeholder={placeholder}
          {...register(name)}
        />
        {errors[name] && (
          <div className=" flex items-center mt-1 text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-1 text-xs capitalize">{errors[id]?.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
