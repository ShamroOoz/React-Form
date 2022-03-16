import FormInput from "Components/FormInput";
import { Link } from "react-router-dom";
import SelfFormHook from "Hooks/SelfFormHook";

const Home = () => {
  const { handleSubmit, onChange, submitting, values } = SelfFormHook();

  const inputs = [
    {
      id: 1,
      name: "username",
      title: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      title: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      title: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      title: "confirmPassword",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <div className="mt-18">
      <div className="w-full  max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 ">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
            Native Form
          </h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Using React State
          </h3>
          {submitting && (
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              submitting....
            </p>
          )}

          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name] || ""}
                onChange={onChange}
              />
            ))}

            <div className="flex items-center justify-between mt-4">
              <Link
                to="/"
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </Link>

              <button
                className="invalid:disabled:opacity-75 disabled:cursor-not-allowed px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?
          </span>

          <Link
            to="/"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
