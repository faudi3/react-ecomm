import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSort } from "../redux/slices/filterSlice";

type SortItem = {
  name: string;
  sortProperty: string;
};
type PopupClick = MouseEvent & {
  path: Node[];
};
const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const sortItems: SortItem[] = [
    { name: "price", sortProperty: "price" },
    { name: "gender", sortProperty: "for" },
    { name: "alphabet", sortProperty: "title" },
  ];

  const onClickListItem = (i: SortItem) => {
    dispatch(setSort(i));
    setOpen(!open);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={"sort"} onClick={() => setOpen(!open)}>
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
};

export default Sort;
