import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../view/home/Home";
import NotFound from "../components/notFound/NotFound";
import Login from "../view/login/Login";
import SignUp from "../view/signup/SignUp";
import Chief from "../view/chief/Chief";
import CheckDocument from "../view/chief/CheckDocument";
import SettingsChief from "../view/chief/Settings";
import Teachers from "../view/chief/Teachers";
import { Teacher } from "../view/teacher/Teacher";
import Settings from "../view/teacher/Settings";
import AddDocument from "../view/teacher/AddDocument";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/chief" element={<Chief />} />
        <Route path="/chief/check/:id" element={<CheckDocument />} />
        <Route path="/chief/settings/:id" element={<SettingsChief />} />
        <Route path="/chief/teachers" element={<Teachers />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/settings/:id" element={<Settings />} />
        <Route path="/teacher/document" element={<AddDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
