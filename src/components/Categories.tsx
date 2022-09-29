import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
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
              value === index ? "categories__title active" : "categories__title"
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
