import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../view/home/Home";
import NotFound from "../components/notFound/NotFound";
import Login from "../view/login/Login";
import SignUp from "../view/signup/SignUp";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
