import { Grid, Button, Container, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Textfield from "../FormsUI/Textfield";
import PasswordInput from "./PasswordInput";
import validationSchema from "./validationSchema.js";
import initialValues from "./initialValues.js";
import { GoogleLogin } from "react-google-login";
import { signin, signup } from "../../utils/auth";

const LogIn = ({}) => {
  const [isSignUp, setSignUp] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { setUser } = useContext(AppContext);
  const history = useHistory();

  const handleSubmit = async (values) => {
    let response;
    try {
      if (!isSignUp) {
        response = await signin(values);
      } else {
        response = await signup(values);
      }
      if (response.message) setLoginError(response.message);
      else {
        setLoginError(null);
        const profile = {
          profile: response?.result,
          token: response?.token,
        };
        localStorage.setItem("profile", JSON.stringify(profile));
        setUser(profile);
        history.push("/");
      }
    } catch (error) {
      console.log(`Index: ${error}`);
    }
  };
  const toggleSignUp = () => {
    setSignUp((prevState) => !prevState);
  };
  const responseGoogle = async (response) => {
    console.log(response);
  };
  const googleSuccess = async (res) => {
    const profile = {
      profile: res?.profileObj,
      token: res?.tokenId,
    };
    try {
      localStorage.setItem("profile", JSON.stringify(profile));
      setUser(profile);
      history.push("/");
    } catch (error) {
      console.log(`Error within google Success function: ${error}`);
    }
  };
  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(isSignUp)}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid item xs={12} md={6}>
                  <Textfield name="firstName" label="First name" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield name="lastName" label="Last Name" />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Textfield name="email" label="E-Mail" />
            </Grid>
            <PasswordInput name="password" confirmation={isSignUp} />
            {loginError && (
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="error">
                  {loginError}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                // onClick={handleSubmit}
                type="submit"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <GoogleLogin
                clientId="109263540642-m011hv8epkc5d5q3kqhspe619c02graa.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Google Sign In
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={toggleSignUp} fullWidth>
                <Typography variant="subtitle2">
                  {isSignUp
                    ? "Already have an account? Log in"
                    : "Don't have an account? Sign up"}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default LogIn;
