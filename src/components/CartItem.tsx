import React from "react";
import styles from "../styles/cart.module.scss";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";
type CartItemProps = {
  id: string;
  price: number;
  title: string;
  count: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  price,
  title,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  type CartItemType = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;

    count: number;
  };

  const onClickPlus = () => {
    // @ts-ignore
    dispatch(addItem({ id } as CartItemType));
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
      <img
        alt={"card picture"}
        className={styles.img}
        src={imageUrl}
        height={70}
      />
      <span className={styles.name}>{title}</span>
      <div className={styles.change}>
        <img
          alt={"flaticon"}
          src={"https://cdn-icons-png.flaticon.com/512/1053/1053155.png"}
          height={25}
          onClick={onClickPlus}
        />
        <span className={styles.amount}>{count}</span>
        <img
          alt={"image minus"}
          src={"https://cdn-icons-png.flaticon.com/512/1053/1053167.png"}
          height={25}
          onClick={onClickMinus}
        />
      </div>
      <span className={styles.price}>{price * count}</span>
      <img
        alt={"remove img"}
        onClick={onClickRemove}
        src={"https://cdn-icons-png.flaticon.com/512/1053/1053184.png"}
        height={25}
      />
    </div>
  );
};

export default CartItem;
