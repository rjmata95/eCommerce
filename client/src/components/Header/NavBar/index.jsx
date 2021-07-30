import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomDrawer from "./Drawer/CustomDrawer";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "0 auto",
  },
  navBar__offset: {
    marginBottom: "12vh",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10vh",
    },
  },
}));

const NavBar = ({ logo, title, btn, menuItems, searchBar, signIn }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickTitle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar color="primary">
        <Toolbar className={classes.toolBar}>
          <CustomDrawer menuItems={menuItems} />
          <IconButton>{logo}</IconButton>
          {!isMobile && (
            <>
              <IconButton onClick={handleClickTitle} className={classes.title}>
                <Typography variant="h6">{title}</Typography>
              </IconButton>
              {searchBar}
            </>
          )}
          <>
            <Button>{btn}</Button>
            {signIn && <IconButton>{signIn}</IconButton>}
          </>
        </Toolbar>
      </AppBar>
      <div className={classes.navBar__offset} />
    </>
  );
};

export default NavBar;
