import { Outlet } from "react-router-dom";
import React from "react";
import { Footer } from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
