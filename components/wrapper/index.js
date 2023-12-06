import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;