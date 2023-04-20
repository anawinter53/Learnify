import React, { createElement } from "react";
import styles from "./index.module.css"
import { forwardRef } from "react";

const PostItSummary = forwardRef(({colour, reverse, message, icon, heading}, ref) => {
  return (
    <div ref={ref} className={`${styles["section"]} ${styles[colour]}  ${reverse ? styles["reverse"] : ""}`} role="postItSummary">
      <div className={styles["card"]}>
        <div className={styles["card-heading"]}>{heading}</div>
        <div className={styles["card-body"]}>{createElement(icon, {className: styles["icon"]})}</div>
      </div>
      <p className={reverse ? styles["reverse"] : ""} role='paragraph'>
        {message}
      </p>
    </div>
  );
});

export default PostItSummary;
