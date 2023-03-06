import React from "react";
import styles from "./_button.module.scss";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
