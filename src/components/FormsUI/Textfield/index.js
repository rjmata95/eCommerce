import React from "react";
import Textfield from "@material-ui/core/TextField";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTestField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTestField.error = true;
    configTestField.helperText = meta.error;
  }

  return (
    <>
      <Textfield {...configTestField} />
    </>
  );
};

export default TextfieldWrapper;
