import React from "react";
import styles from "../styles/search.module.scss";

const Search: React.FC = ({ searchValue, setSearchValue }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className={styles.wrapper}>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder="Search..."
        value={searchValue}
        ref={inputRef}
      />
      {searchValue && (
        <img
          onClick={() => onClickClear()}
          src={"https://cdn-icons-png.flaticon.com/512/3416/3416079.png"}
          className={styles.img}
          alt={"clear"}
        />
      )}
    </div>
  );
};
export default Search;
