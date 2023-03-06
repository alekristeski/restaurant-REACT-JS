import React from "react";
import styles from "./_footer.module.scss";
import BorderBottom from "../../atoms/BorderBottom/BorderBottom";

const Footer = () => {
  return (
    <>
      <BorderBottom />
      <p className={styles.footer_para}>Copyright &#169; Brainster 2022</p>
    </>
  );
};

export default Footer;
