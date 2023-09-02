import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout(props) {
  const { scrolling } = props;

  return (
    <>
      <div className=" fixed w-full top-0 z-50">
        <Header scrolling={scrolling} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
