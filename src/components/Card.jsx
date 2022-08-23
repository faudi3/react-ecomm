import React from "react";
import hoodie from "../img/clothes/hoodie1.webp";
import hoodie2 from "../img/clothes/hoodie2.webp";

const Card = () => {
  return (
    <div className={"card"}>
      <img
        className={"card__img"}
        height={300}
        width={280}
        src={hoodie2}
        alt={"hi"}
      />
      <h3 className={"card__title"}>SDMN Varsity Hoodie Black</h3>
      <div className={"card__wrap"}>
        <p className={"card__price"}>500 rub</p>
        <p className={"card__for"}>mens</p>
      </div>
    </div>
  );
};
export default Card;
