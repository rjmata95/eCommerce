import { MenuItem, TextField } from "@material-ui/core";
import React from "react";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherprops }) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext(name);
  const handleChange = (ev) => {
    const { value } = ev.target;
    setFieldValue(name, value);
  };
  const configSelect = {
    ...field,
    ...otherprops,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (mata && mata.error && mata.touched) {
    configSelect.error = true;
    configSelect.helperText = mata.error;
  }

  return (
    <>
      <TextField {...configSelect}>
        {Object.keys(options).map((item, index) => (
          <MenuItem key={index} value={item}>
            {options[item]}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectWrapper;
