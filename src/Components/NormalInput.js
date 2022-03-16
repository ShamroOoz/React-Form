import React from "react";
import { UserIcon } from "@heroicons/react/solid";

const NormalInput = ({ errors, ...inputprop }) => {
  return (
    <div>
      <div className="relative mt-4">
        <input
          className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
          {...inputprop}
        />

        <div className="absolute left-0 inset-y-0 flex items-center">
          <UserIcon className="h-7 w-7 ml-3 text-gray-400 p-1" />
        </div>
      </div>
      <div>{errors && <p className="text-red-500">{errors}</p>}</div>
    </div>
  );
};

export default NormalInput;
