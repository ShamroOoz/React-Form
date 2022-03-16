import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
import BasicForm from "Pages/BasicForm";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="basic-form" element={<BasicForm />} />
      </Route>
    </Routes>
  );
};

export default App;
