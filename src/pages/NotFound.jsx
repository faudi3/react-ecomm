import React from "react";
import styles from "../styles/notfound.module.scss";

const NotFound = (props) => {
  return (
    <div>
      <h1 className={styles.text}>This page doesn't exist :(</h1>
    </div>
  );
};

export default NotFound;
