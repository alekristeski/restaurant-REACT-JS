import React from "react";
import styles from "./_label.module.scss";

interface Props {
  name: string;
  labelName: string;
}
const Label = ({ labelName, name }: Props) => {
  return (
    <label htmlFor={labelName} className={styles.label}>
      {name}
    </label>
  );
};

export default Label;
