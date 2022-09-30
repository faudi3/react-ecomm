import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartItem,
  addItem,
  selectCartItemById,
} from "../redux/slices/cartSlice";

type CardProps = {
  id: string;
  title: string;
  price: number;
  img: string;
  forg: string;
};

const Card: React.FC<CardProps> = ({ id, title, price, img, forg }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = (event: any) => {
    event.preventDefault();
    const item: CartItem = {
      id: id,
      title: title,
      price: price,
      imageUrl: img,
      count: 0,
      category: 0,
      forg: "",
    };
    dispatch(addItem(item));
  };
  return (
    <div className={"card"}>
      <img src={img} className={"card__img"} width={220} alt={"hi"} />
      <div className={"card__text"}>
        <h3 className={"card__title"}>{title}</h3>
        <div className={"card__wrap"}>
          <p className={"card__price"}>{price} rub</p>
          <p className={"card__for"}>{forg}</p>
        </div>
        <div onClick={onClickAdd} className={"card_add"}>
          Add
        </div>
        {addedCount > 0 && <span>{addedCount}</span>}
      </div>
    </div>
  );
};
export default Card;
