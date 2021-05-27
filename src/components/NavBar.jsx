import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "0 auto",
    // position: "absolute",
    // left: "50vw",
  },
  //   navBar: {
  //     color: "#ffff",
  //   },
  navBar__offset: {
    marginBottom: "10vh",
  },
  toolBar: {
    // justifyContent: "space-evenly",
  },
}));

const NavBar = ({ logo, title, btn, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickMenu = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleClickTitle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar color="primary">
        <Toolbar className={classes.toolBar}>
          <IconButton onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            //   anchorOrigin={{
            //     vertical: "top",
            //     horizontal: "right",
            //   }}
            keepMounted
            //   transformOrigin={{
            //     vertical: "top",
            //     horizontal: "right",
            //   }}
            open={open}
            onClose={handleClickMenu}
          >
            {menuItems.map((item) => (
              <MenuItem onClick={handleClickMenu}>{item}</MenuItem>
            ))}
          </Menu>
          <IconButton>{logo}</IconButton>
          <IconButton onClick={handleClickTitle} className={classes.title}>
            <Typography variant="h6">{title}</Typography>
          </IconButton>

          <Button>{btn}</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.navBar__offset} />
    </>
  );
};

export default NavBar;
