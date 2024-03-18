import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Results from "./Results";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
