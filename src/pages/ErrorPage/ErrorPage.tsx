import React from "react";
import { Link } from "react-router-dom";
import styles from "./_errorPage.module.scss";
const ErrorPage = () => {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_12}>
            <div className={styles.col_sm_10}>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.text_center}>404</h1>
              </div>
              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>
                  Oops! We can't find the page you're looking for
                </h3>
                <p>
                  You tried to request a page that doesn't exist. If you believe
                  this to be in error, let us know on the forums.
                </p>
                <Link to={"/"} className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
