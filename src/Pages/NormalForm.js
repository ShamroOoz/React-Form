import React from "react";
import {
  LockClosedIcon,
  LockOpenIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/solid";
import useNormalForm from "Hooks/UseNormalForm";
import validateInfo from "Utils/validateInfo";
import NormalInput from "Components/NormalInput";

const NormalForm = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } =
    useNormalForm(validateInfo);

  const inputs = [
    {
      id: 1,
      name: "username",
      title: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      // errorMessage:
      //   "Username should be 3-16 characters and shouldn't include any special character!",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      // required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      title: "email",
      placeholder: "Email",
      // errorMessage: "It should be a valid email address!",
      // label: "Email",
      // required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      title: "password",
      placeholder: "Password",
      //  errorMessage:
      //    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      //  label: "Password",
      //  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      //  required: true,
    },
    {
      id: 5,
      name: "password2",
      type: "password",
      title: "confirm Password",
      placeholder: "Confirm Password",
      // errorMessage: "Passwords don't match!",
      // label: "Confirm Password",
      // pattern: values.password,
      // required: true,
    },
  ];

  return (
    <div className="p-8 lg:w-1/2 mx-auto rounded-lg shadow-xl mt-5">
      <div className="bg-gray-100 rounded-lg py-12 px-4 lg:px-24">
        {isSubmitting && (
          <p className="text-center text-sm text-gray-500 font-light">
            Submitting...
          </p>
        )}

        <form className="mt-6" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <NormalInput
              key={input.id}
              {...input}
              value={values[input.name] || ""}
              errors={errors[input.name]}
              onChange={handleChange}
            />
          ))}
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NormalForm;
