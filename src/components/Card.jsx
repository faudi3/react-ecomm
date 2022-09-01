import React from "react";

const Card = (props) => {
  return (
    <div className={"card"}>
      <img
        src={props.img}
        className={"card__img"}
        height={300}
        width={280}
        alt={"hi"}
      />
      <h3 className={"card__title"}>{props.title}</h3>
      <div className={"card__wrap"}>
        <p className={"card__price"}>{props.price} rub</p>
        <p className={"card__for"}>{props.for}</p>
      </div>
    </div>
  );
};
export default Card;
