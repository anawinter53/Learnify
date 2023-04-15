import React from "react";
import styles from "./index.module.css"

export default function index({colour, reverse}) {
  return (
    <div className={`${styles["section"]} ${styles[colour]} ${reverse ? styles["reverse"] : ""}`}>
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
}
