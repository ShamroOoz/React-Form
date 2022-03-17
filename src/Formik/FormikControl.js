import React from "react";
import Input from "./FormControls/Input";
import Textarea from "./FormControls/Textarea";
import Select from "./FormControls/Select";
import RadioButtons from "./FormControls/RadioButtons";
import CheckboxGroup from "./FormControls/CheckboxGroup";
// import DatePicker from "./DatePicker";
// import ChakraInput from "./ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    //     case "date":
    //       return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
