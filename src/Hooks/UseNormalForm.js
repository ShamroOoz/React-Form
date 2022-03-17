import { useState } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: "",
};
const useNormalForm = (validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let errorData = validate(values);
    setErrors(errorData);
    if (Object.keys(errorData).length !== 0) {
      return console.log("You have ERROR YOU NEED TO FIX THEN");
    }
    setTimeout(() => {
      console.log("Herr", values);
      setIsSubmitting(false);
      setValues({});
    }, 3000);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     console.log("values");
  //   }
  // }, [errors, isSubmitting]);

  return { handleChange, handleSubmit, values, errors, isSubmitting };
};

export default useNormalForm;
