import React, { useContext } from "react";
import { Context } from "../../../context/restaurantsContext";
import styles from "./_cuisines.module.scss";

const Cuisines = () => {
  const { uniqueType, handleFilterResByType } = useContext(Context);
  return (
    <div className={styles.wrapper_type}>
      {uniqueType.map((type) => {
        return (
          <button
            key={type + 1}
            className={styles.button_type}
            onClick={() => handleFilterResByType(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default Cuisines;
