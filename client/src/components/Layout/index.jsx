import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  content: {
    flex: "1 0 auto",
  },
  footer: {
    flexShrink: 0,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Header />
        <Container className={classes.content} maxWidth="lg">
          {children}
        </Container>
        <Footer className={classes.footer} />
      </Box>
    </>
  );
};

export default Layout;
