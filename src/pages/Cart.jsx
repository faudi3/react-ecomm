import React from "react";
import styles from "../styles/cart.module.scss";
import cart from "../img/cart.png";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems, removeItem } from "../redux/slices/cartSlice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Are you sure you want to clear?")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <div>Car is empty</div>;
  }
  return (
    <div className={styles.root}>
      <div className={styles.upperline}>
        <div className={styles.left}>
          <img src={cart} />
          <h2>Cart</h2>
        </div>
        <div onClick={onClickClear} className={styles.left}>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/3416/3416079.png"}
            height={35}
          />
          <h2 className={styles.clear}>Clear</h2>
        </div>
      </div>
      <div className={styles.items}>
        {items.map((item) =>
          item.count > 0 ? <CartItem key={item.id} {...item} /> : ""
        )}
      </div>
      <span className={styles.total}>Total {totalPrice} rub</span>
    </div>
  );
};

export default Cart;
