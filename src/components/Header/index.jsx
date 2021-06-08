import React, { useContext } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import NavBar from "./NavBar";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import SearchBar from "../SearchBar";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const title = usePageTitle();
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
