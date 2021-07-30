import React, { useContext, useEffect } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import NavBar from "./NavBar";
import { Button, Avatar, Menu, MenuItem } from "@material-ui/core";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import SearchBar from "../SearchBar";

const Header = () => {
  const { state, setUser } = useContext(AppContext);
  const { cart, user } = state;
  const { profile, token } = user;
  const title = usePageTitle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const userLogOut = () => {
    localStorage.removeItem("profile");
    setAnchorEl(null);
    setUser({});
  };
  useEffect(() => {
    console.log(location);
    if (!token) setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <>
      <NavBar
        logo={<Link to="/">Marketplace</Link>}
        title={title}
        btn={
          <>
            <Link to="/checkout">
              <ShoppingCartOutlined />
              {/* <i className="fas fa-shopping-basket" /> */}
            </Link>
            {cart.length > 0 && <span>{cart.length}</span>}
          </>
        }
        searchBar={<SearchBar />}
        signIn={
          token ? (
            <>
              <Button onClick={handleAvatarClick}>Hi, {profile.name}</Button>
              {/* <Avatar
                alt={profile.name}
                src={profile.imageUrl}
                onClick={handleAvatarClick}
              /> */}
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={userLogOut}>Log Out</MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )
        }
        menuItems={[
          <Link to="/checkout">Checkout</Link>,
          <Link to="/checkout/information">Information</Link>,
          <Link to="/checkout/payment">Payment</Link>,
          <Link to="/checkout/success">Success</Link>,
        ]}
      />
    </>
  );
};

export default Header;
