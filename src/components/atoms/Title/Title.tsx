import React from "react";
import styles from "./_title.module.scss";
interface TitleInterface {
  title: string;
}
const Title = ({ title }: TitleInterface) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Title;
