import React from "react";

import styles from "./_input.module.scss";

interface Props {
  inputName: string;
  type: string;
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ inputName, type, value, handleOnChange }: Props) => {
  if (type === "text") {
    return (
      <input
        id={inputName}
        className={styles.input}
        type={type}
        value={value}
        onChange={handleOnChange}
      />
    );
  } else {
    return (
      <input
        id={inputName}
        className={`${styles.range}`}
        onChange={handleOnChange}
        type={type}
        min="1"
        max="5"
      />
    );
  }
};

export default Input;
