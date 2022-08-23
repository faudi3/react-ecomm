import React from "react";
import logo from "../img/logo.png";
import cart from "../img/cart.png";
const Header = () => {
  return (
    <div className={"header"}>
      <div className={"header__wrap"}>
        <img className="header__logo" height={40} src={logo} alt="лого" />
        <h1 className={"header__title"}>SDMN</h1>
      </div>
      <div className={"header__cart"}>
        <div className={"header__cart-left"}>
          <img className="header__cart-img" width={35} height={35} src={cart} />
          <p> 3</p>
        </div>
        <div className={"header__cart-right"}>
          <p className={"header__price"}>495</p>
          <p>rub</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
