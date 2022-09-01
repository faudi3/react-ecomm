import React from "react";
const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const sortItems = ["price", "popularity", "alphabet"];
  const onChangeSort = (i) => {
    setActive(i);
    setOpen(!open);
  };
  return (
    <div className={"sort"} onClick={() => setOpen(!open)}>
      <h2 className={"sort__title"}>sort by: </h2>
      <h2 className={"sort__title active"}>{sortItems[active]}</h2>
      {open && (
        <div className={"sort__popup"}>
          {sortItems.map((obj, ind) => (
            <span
              key={ind}
              onClick={() => onChangeSort(ind)}
              className={ind == active ? "active" : ""}
            >
              {obj}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sort;
