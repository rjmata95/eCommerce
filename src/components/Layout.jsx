import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppBar from "@material-ui/core/AppBar";
import "../styles/components/Layout.css";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
