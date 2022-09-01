import React from "react";
import styles from "../styles/cart.module.scss";
import cart from "../img/cart.png";
const Cart = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.upperline}>
        <div className={styles.left}>
          <img src={cart} />
          <h2>Cart</h2>
        </div>
        <div className={styles.left}>
          <img
            src="https://cdn.icon-icons.com/icons2/210/PNG/256/shopping-basket-remove256_24901.png"
            height={35}
          />
          <h2>Clear</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
