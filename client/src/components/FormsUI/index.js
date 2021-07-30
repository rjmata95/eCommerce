import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Select from "./Select";
import Textfield from "./Textfield";
import Checkbox from "./Checkbox";
import { Box, Grid } from "@material-ui/core";
import countries from "./utils/countries.json";

const FormsUI = ({ onSubmit, backBtn, submitBtn }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    termsOfService: false,
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Enter a valid email").required("Required"),
    phone: Yup.number()
      .integer()
      .typeError("Enter a valid phone number")
      .required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zipcode: Yup.number()
      .integer()
      .typeError("Enter a valid zip code")
      .required("Required"),
    country: Yup.string().required("Required"),
    termsOfService: Yup.boolean()
      .oneOf([true], "Terms and conditions hasn't been accepted")
      .required("Terms and conditions hasn't been accepted"),
  });

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Textfield name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="lastName" label="Last Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Textfield name="email" label="Email Address" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Textfield
                name="phone"
                label="Phone number"
                placeholder="(123)-4567890"
              />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="address" label="Address" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="city" label="City" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="zipcode" label="Zip Code" />
            </Grid>
            <Grid item xs={12}>
              <Select name="country" label="country" options={countries} />
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                name="termsOfService"
                label="I Agree"
                legend="Terms of Service"
              />
            </Grid>
            <Grid container item justify="space-between">
              <Grid item xl>
                {backBtn}
              </Grid>
              <Grid item xl>
                {submitBtn}
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
};

export default FormsUI;
