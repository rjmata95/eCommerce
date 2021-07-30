import React from "react";
import { TextField, IconButton, Grid } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useField } from "formik";

const PasswordInput = ({ name, confirmation, ...otherProps }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = React.useState(false);
  const [field2, meta2] = useField(name + 2);

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const configTextField = {
    ...otherProps,
    label: "Password",
    fullWidth: true,
    variant: "outlined",
    type: showPassword ? "text" : "password",
  };
  const configPassword = {
    ...field,
    InputProps: {
      endAdornment: (
        <IconButton onClick={toggleShowPassword}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      ),
    },
  };
  const configConfirmPassword = {
    ...field2,
    label: "Confirm Password",
  };

  if (meta && meta.touched && meta.error) {
    configPassword.error = true;
    configPassword.helperText = meta.error;
  }
  if (meta2 && meta2.touched && meta2.error) {
    configConfirmPassword.error = true;
    configConfirmPassword.helperText = meta.error;
  }
  // if (field.value !== field2.value) {
  //   configConfirmPassword.error = true;
  //   configConfirmPassword.helperText = "Password must coincide";
  // }

  return (
    <Grid item container spacing={2}>
      <Grid item xs={12}>
        <TextField {...configTextField} {...configPassword} />
      </Grid>
      {confirmation && (
        <Grid item xs={12}>
          <TextField {...configTextField} {...configConfirmPassword} />
        </Grid>
      )}
    </Grid>
  );
};

export default PasswordInput;
