import React from "react";
import styles from "../styles/cart.module.scss";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

function CartItem({ id, price, title, count, imageUrl }) {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remove")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.item}>
      <img className={styles.img} src={imageUrl} height={70} />
      <span className={styles.name}>{title}</span>
      <div className={styles.change}>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1053/1053155.png"}
          height={25}
          onClick={onClickPlus}
        />
        <span className={styles.amount}>{count}</span>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1053/1053167.png"}
          height={25}
          onClick={onClickMinus}
        />
      </div>
      <span className={styles.price}>{price * count}</span>
      <img
        onClick={onClickRemove}
        src={"https://cdn-icons-png.flaticon.com/512/1053/1053184.png"}
        height={25}
      />
    </div>
  );
}

export default CartItem;
