import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
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
  toolBar: {
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  btn: {
    // marginLeft: "auto",
  },
}));

const NavBar = ({ logo, title, btn, menuItems, searchBar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClickMenu = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);
  const handleClickTitle = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar color="primary">
        <Toolbar className={classes.toolBar}>
          <CustomDrawer menuItems={menuItems} />
          {/* <IconButton onClick={handleMenu}>
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
          </Menu> */}
          <IconButton>{logo}</IconButton>
          {!isMobile && (
            <IconButton onClick={handleClickTitle} className={classes.title}>
              <Typography variant="h6">{title}</Typography>
            </IconButton>
          )}
          <>
            {searchBar}
            <Button className={classes.btn}>{btn}</Button>
          </>
        </Toolbar>
      </AppBar>
      <div className={classes.navBar__offset} />
    </>
  );
};

export default NavBar;
