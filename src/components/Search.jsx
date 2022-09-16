import React from "react";
import styles from "../styles/search.module.scss";
const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.wrapper}>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder="Search..."
        value={searchValue}
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          src={"https://cdn-icons-png.flaticon.com/512/3416/3416079.png"}
          className={styles.img}
        />
      )}
    </div>
  );
};
export default Search;
