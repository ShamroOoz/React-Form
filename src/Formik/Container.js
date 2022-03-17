import React from "react";
import { Formik } from "formik";
import FormContainer from "./FormContainer";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  description: Yup.string().required("Required"),
  selectOption: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
  checkboxOption: Yup.array().required("Required"),
  //   birthDate: Yup.date().required("Required").nullable(),
});

const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
};

const onSubmit = (values, actions) => {
  console.log("Form data", values);
  console.log(actions);
  actions.setSubmitting(false);
  actions.resetForm();
};
const Container = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white mt-14 max-w-sm max-h-screen mx-auto ">
      <h5 className="text-gray-900 text-xl text-center leading-tight font-medium mb-2">
        Formik Form
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        component={FormContainer}
        validateOnChange={true}
      />
    </div>
  );
};

export default Container;
