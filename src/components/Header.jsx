import React from "react";
import logo from "../img/logo.png";
import cart from "../img/cart.png";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useSelector } from "react-redux";

const Header = ({ searchValue, setSearchValue, toggleTheme, theme }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
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

      {/*<Search searchValue={searchValue} setSearchValue={setSearchValue} />*/}
      <Link to={"/cart"}>
        <div className={"header__cart"}>
          <div className={"header__cart-left"}>
            <img
              className="header__cart-img"
              width={35}
              height={35}
              src={cart}
              alt={"headert-cart"}
            />
            <p> {totalCount}</p>
          </div>
          <div className={"header__cart-right"}>
            <p className={"header__price"}>{totalPrice}</p>
            <p>rub</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
