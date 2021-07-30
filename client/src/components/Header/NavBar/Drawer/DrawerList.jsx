import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import { List, ListItem, ListItemIcon, Divider } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
}));

const DrawerList = ({ toggleDrawer, menuItems }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {item}
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DrawerList;
