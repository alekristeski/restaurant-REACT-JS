import React from "react";
import styles from "./_loader.module.scss";
const Loader = () => {
  return (
    <div className={styles.align_center}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
