import React from "react";
import { Header } from "../pages/Header/Header";
import Features from "../pages/Features/Features";
import Footer from "../pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import {Homepage} from "../pages/Homepage/Homepage";

const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Router;
