import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerList from "./DrawerList";

const CustomDrawer = ({ menuItems }) => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };
  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} menuItems={menuItems} />
      </Drawer>
    </>
  );
};

export default CustomDrawer;
