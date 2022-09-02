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
          src={
            "https://cdn.icon-icons.com/icons2/624/PNG/512/Delete-80_icon-icons.com_57340.png"
          }
          className={styles.img}
        />
      )}
    </div>
  );
};
export default Search;
