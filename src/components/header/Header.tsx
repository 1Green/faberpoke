import React, { FunctionComponent } from "react";
import styles from "./header.module.css";

export const Header: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>FaberPoké</p>
    </div>
  );
};

export default Header;
