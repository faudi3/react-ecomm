import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
const Card = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === props.id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.img,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={"card"}>
      <img src={props.img} className={"card__img"} width={220} alt={"hi"} />
      <div className={"card__text"}>
        <h3 className={"card__title"}>{props.title}</h3>
        <div className={"card__wrap"}>
          <p className={"card__price"}>{props.price} rub</p>
          <p className={"card__for"}>{props.for}</p>
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
