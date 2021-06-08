import React from "react";
import { InputAdornment, withStyles, fade, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
const StyledSearchBar = withStyles((theme) => ({
  root: {
    color: "inherit",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    border: "none",
  },
}))(TextField);

export default function SearchBar() {
  return (
    <StyledSearchBar
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        endAdornment: (
          //   <InputAdornment>
          <Search />
          //   </InputAdornment>
        ),
      }}
    />
  );
}
