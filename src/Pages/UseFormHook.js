import React, { useState, useEffect } from "react";
import Input from "Components/Input";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "./Alert";
import Select from "react-select";

let schema = yup.object().shape({
  name: yup.string().required().max(8),
  email: yup.string().email().required(),

  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const UseFormHook = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues, //get all the value of the form this is function
    formState,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      name: "",
      password: "",
      email: "",
      passwordConfirm: "",
      filters: [],
    },
  });

  const [submitted, setSubmitted] = useState();

  const onSubmit = async (data) => {
    await sleep(2000);
    console.log(data);
    setSubmitted(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        password: "",
        email: "",
        passwordConfirm: "",
        filters: [],
      });
    }
  }, [formState, reset]);

  return (
    <>
      {submitted && <Alert submitted={submitted} setSubmitted={setSubmitted} />}
      <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add User</h1>
        <p className="text-gray-600 mt-6">
          This form is implemented by use-form-Hook
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <Input
              label={"Name"}
              type={"text"}
              name={"name"}
              id={"name"}
              placeholder="Enter your name"
              register={register}
              errors={errors}
            />
            <Input
              label={"Email"}
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder="Enter your email"
              register={register}
              errors={errors}
            />
            <Input
              label={" Password"}
              type={"password"}
              name={"password"}
              id={"password"}
              placeholder="Enter your password"
              register={register}
              errors={errors}
            />
            <Input
              label={"Confirm Password"}
              type={"password"}
              name={"passwordConfirm"}
              id={"passwordConfirm"}
              placeholder="Confirm Password"
              register={register}
              errors={errors}
            />

            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                React select
              </label>
              <Controller
                name="filters"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      className="reactSelect"
                      name="filters"
                      placeholder="Filters"
                      options={options}
                      isMulti
                      {...field}
                    />
                  );
                }}
              />
            </div>

            <div className="space-x-4 mt-8">
              <button
                disabled={!isDirty || !isValid || isSubmitting}
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() =>
                  reset({
                    name: "shamroz",
                    password: "Shamroz@123",
                    email: "shamroz@gmail.com",
                    passwordConfirm: "Shamroz@123",
                    filters: [],
                  })
                }
                className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UseFormHook;
