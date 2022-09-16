import React from "react";
import styles from "../styles/search.module.scss";
const Search = ({ searchValue, setSearchValue }) => {
  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
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
        />
      )}
    </div>
  );
};
export default Search;
