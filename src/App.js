import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </div>
  );
};

export default App;
