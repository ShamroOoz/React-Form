import React, { useState } from "react";

const SelfFormHook = () => {
  const initialState = {
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    firstName: " ",
  };

  const [values, setValues] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      console.log(values);
    }, 3000);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return { handleSubmit, onChange, submitting, values };
};

export default SelfFormHook;
