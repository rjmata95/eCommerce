import React, { useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import NavBar from "../components/NavBar";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const title = usePageTitle();
  return (
    <>
      <NavBar
        logo={<Link to="/">Platzi Conf Merch</Link>}
        title={title}
        btn={
          <>
            <Link to="/checkout">
              <i className="fas fa-shopping-basket" />
            </Link>
            {cart.length > 0 && <span>{cart.length}</span>}
          </>
        }
        menuItems={[
          <Link to="/checkout">Checkout</Link>,
          <Link to="/checkout/information">Information</Link>,
          <Link to="/checkout/payment">Payment</Link>,
        ]}
      />
    </>
  );
};

export default Header;
