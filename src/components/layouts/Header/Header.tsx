import React from "react";
import { Link } from "react-router-dom";
import BorderBottom from "../../atoms/BorderBottom/BorderBottom";
import styles from "./_header.module.scss";
const Header = () => {
  return (
    <>
      <div className={styles.flex_header}>
        <Link to="">Restaurant</Link>
        <Link to="/favourite-restaurants">
          <i className="fas fa-heart"></i>
        </Link>
      </div>
      <BorderBottom />
    </>
  );
};

export default Header;
