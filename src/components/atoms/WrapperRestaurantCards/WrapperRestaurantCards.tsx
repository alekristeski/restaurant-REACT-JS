import React from "react";
import styles from "./_wrapperRestaurantCards.module.scss";
interface Props {
  children: JSX.Element;
}
const WrapperRestaurantCards = ({ children }: Props) => {
  return <div className={styles.grid_col_4}>{children}</div>;
};

export default WrapperRestaurantCards;
