import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
// import "../styles/components/Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
    padding: "1rem 0",
    marginTop: "2rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.root}>
      <Container maxWidth="lg" className={classes.footer}>
        <Typography variant="subtitle1">
          by Raynulfo Mata. May 2021 ©
        </Typography>
        <Typography variant="subtitle1">
          How do you take your coffee?
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
