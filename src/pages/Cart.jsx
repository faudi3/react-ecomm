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
            src={"https://cdn-icons-png.flaticon.com/512/3416/3416079.png"}
            height={35}
          />
          <h2 className={styles.clear}>Clear</h2>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <img
            className={styles.img}
            src={
              "https://cdn.shopify.com/s/files/1/1078/8124/products/BlackOrangeHood1_900x.png?v=1657552446"
            }
            height={70}
          />
          <span className={styles.name}>
            a SDMN Varsity Hoodie Black Orange Print
          </span>
          <div className={styles.change}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1053/1053155.png"}
              height={25}
            />
            <span className={styles.amount}>2</span>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1053/1053167.png"}
              height={25}
            />
          </div>
          <span className={styles.price}>495</span>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/1053/1053184.png"}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
