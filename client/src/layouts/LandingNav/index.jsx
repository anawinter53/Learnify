import React from 'react'
import styles from "./index.module.css"

export default function LandingNav() {
  return (
    <>
      <nav>
        <h1 className={styles["title"]}>App Name</h1>
        <div className={styles["options"]}>
          <div className={`${styles["option"]} ${styles["btn"]}`}>Button 1</div>
          <div className={`${styles["option"]} ${styles["btn"]}`}>Button 2</div>
          <div className={`${styles["option"]} ${styles["btn"]}`}>Button 3</div>
        </div>
        <div className={`${styles["login"]} ${styles["btn"]}`}>Login</div>
      </nav>
    </>
  )
}
