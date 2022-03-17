import React, { useState } from "react";
import { HeroIcon } from "Utils/HeroIcon";

const NormalInput = ({ errors, errorMessage, avatar, ...inputprop }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="relative mt-6">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          {...inputprop}
          onBlur={handleFocus}
          onFocus={() => inputprop.name === "password2" && setFocused(true)}
          focused={focused.toString()}
        />
        <div className="errormsg absolute -bottom-6  items-center mt-1 text-red-700">
          {errorMessage}
        </div>
        <div className="absolute left-0 inset-y-0 flex items-center">
          <HeroIcon
            icon={avatar}
            color="h-7 w-7 ml-3 text-gray-400 p-1"
            solid
          />
        </div>
      </div>

      <div>{errors && <p className="text-red-500">{errors}</p>}</div>
    </>
  );
};

export default NormalInput;
