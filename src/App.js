import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
import UseFormHook from "Pages/UseFormHook";
import NormalForm from "Pages/NormalForm";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="use-form-Hook" element={<UseFormHook />} />
        <Route path="normal-form" element={<NormalForm />} />
      </Route>
    </Routes>
  );
};

export default App;
