import React from "react";
import styles from "../styles/cart.module.scss";
import cart from "../img/cart.png";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems, removeItem, selectCart } from "../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (window.confirm("Are you sure you want to clear?")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <div className={styles.full}>Cart is empty</div>;
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
      <div className={styles.wrap}>
        <div className={styles.items}>
          {items.map((item: any) =>
            item.count > 0 ? <CartItem key={item.id} {...item} /> : ""
          )}
        </div>
        <span className={styles.total}>Total {totalPrice} rub</span>
      </div>
    </div>
  );
};

export default Cart;
