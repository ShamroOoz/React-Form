import React from "react";
import { Form } from "formik";
import FormikControl from "./FormikControl";

const dropdownOptions = [
  { key: "Select an option", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];
const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];
const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

const FormContainer = (props) => {
  const { isValid, isSubmitting } = props;
  return (
    <Form>
      <FormikControl
        control="input"
        type="email"
        label="Email"
        name="email"
        placeholder="Enter Email..."
      />
      <FormikControl
        control="textarea"
        label="Description"
        name="description"
      />
      <FormikControl
        control="select"
        label="Select a topic"
        name="selectOption"
        options={dropdownOptions}
      />
      <FormikControl
        control="radio"
        label="Radio topic"
        name="radioOption"
        options={radioOptions}
      />
      <FormikControl
        control="checkbox"
        label="Checkbox topics"
        name="checkboxOption"
        options={checkboxOptions}
      />
      <button
        disabled={!isValid || isSubmitting}
        type="submit"
        className="myButton"
      >
        Submit
      </button>
    </Form>
  );
};

export default FormContainer;
