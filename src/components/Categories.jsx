import React from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (x) => {
    setActiveIndex(x);
  };
  const categories = [
    "All types",
    "Hoodies",
    "Leggings",
    "Shorts",
    "Winterwear",
  ];
  return (
    <ul className={"categories"}>
      {categories.map((categories, index) => {
        return (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={
              activeIndex === index
                ? "categories__title active"
                : "categories__title"
            }
          >
            {categories}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
