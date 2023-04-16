import React from "react";
import styles from "./index.module.css"
import { forwardRef } from "react";

const PostItSummary = forwardRef(({colour, reverse}, ref) => {
  return (
    <div ref={ref} className={`${styles["section"]} ${styles[colour]} ${reverse ? styles["reverse"] : ""}`} role="postItSummary">
      <div className={styles["card"]}>
        <div className={styles["card-heading"]}></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sapiente
        dolores corporis repudiandae repellat! Numquam assumenda voluptas
        possimus doloremque ipsa, esse maiores eos consequuntur unde aliquam
        fugiat, nulla, laborum fuga.
      </p>
    </div>
  );
});

export default PostItSummary;