import React from "react";
import logo from "../img/logo.png";
import cart from "../img/cart.png";
import { Link, useLocation } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

const Header = ({ toggleTheme, theme }) => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const location = useLocation();

  return (
    <div className={"header"}>
      <Link to={"/"}>
        <div className={"header__wrap"}>
          <img className="header__logo" height={40} src={logo} alt="лого" />
          <h1 className={"header__title"}>SDMN</h1>
        </div>
      </Link>
      <div className={"header__theme"}>
        <label>{theme === "light" ? "light mode" : "dark mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
      {location.pathname !== "/cart" && (
        <Link to={"/cart"}>
          <div className={"header__cart"}>
            <div className={"header__cart-left"}>
              <img
                className="header__cart-img"
                width={35}
                height={35}
                src={cart}
                alt={"header-cart"}
              />
              <p> {totalCount}</p>
            </div>
            <div className={"header__cart-right"}>
              <p className={"header__price"}>{totalPrice}</p>
              <p>rub</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
