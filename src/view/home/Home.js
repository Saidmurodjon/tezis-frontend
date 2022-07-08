import React from "react";
import Navbar from "../../components/navbar/Navbar";
export const Home = () => {
  const state = JSON.parse(localStorage.getItem("state"));
  return (
    <>
      <Navbar search={true} type={state} profil={true} />
    </>
  );
};
