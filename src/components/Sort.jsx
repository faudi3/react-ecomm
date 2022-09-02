import React from "react";
const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);

  const sortItems = [
    { name: "price", sort: "price" },
    { name: "gender", sort: "for" },
    { name: "alphabet", sort: "title" },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(!open);
  };
  return (
    <div className={"sort"} onClick={() => setOpen(!open)}>
      <h2 className={"sort__title"}>sort by: </h2>
      <h2 className={"sort__title active"}>{value.name}</h2>
      {open && (
        <div className={"sort__popup"}>
          {sortItems.map((obj, ind) => (
            <span
              key={ind}
              onClick={() => onClickListItem(obj)}
              className={value.sort == obj.sort ? "active" : ""}
            >
              {obj.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sort;
