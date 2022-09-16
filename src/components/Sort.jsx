import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);

  const sortItems = [
    { name: "price", sortProperty: "price" },
    { name: "gender", sortProperty: "for" },
    { name: "alphabet", sortProperty: "title" },
  ];

  const onClickListItem = (i) => {
    dispatch(setSort(i));
    setOpen(!open);
  };
  return (
    <div className={"sort"} onClick={() => setOpen(!open)}>
      <h2 className={"sort__title"}>sort by: </h2>
      <h2 className={"sort__title active"}>{sort.name}</h2>
      {open && (
        <div className={"sort__popup"}>
          {sortItems.map((obj, ind) => (
            <span
              key={ind}
              onClick={() => onClickListItem(obj)}
              className={sort.sortProperty == obj.sortProperty ? "active" : ""}
            >
              {obj.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
export default Sort;
