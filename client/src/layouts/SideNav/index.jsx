import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faQuestion, faChalkboard, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <>
      <nav className={styles["side-nav"]} role='navigation'>
        <div>
          <NavLink to="/" className={styles["title"]}>
            Learnify
          </NavLink>
          <div className={styles["options"]} role='options'>
            <NavLink to="/dashboard" className={styles["nav"]}>
              <FontAwesomeIcon icon={faTableColumns} className={styles["icon"]}/>
              <div className={styles["btn"]}>Dashboard</div>
            </NavLink>
            <NavLink to="/dashboard/quizzes" className={styles["nav"]}>
              <FontAwesomeIcon icon={faQuestion} className={styles["icon"]}/>
              <div className={styles["btn"]}>Quizzes</div>
            </NavLink>
            <NavLink to="/dashboard/flashcards" className={styles["nav"]}>
              <FontAwesomeIcon icon={faChalkboard} className={styles["icon"]}/>
              <div className={styles["btn"]}>Flashcards</div>
            </NavLink>
            <NavLink to="/dashboard/userprofile" className={styles["nav"]}>
              <FontAwesomeIcon icon={faUser} className={styles["icon"]}/>
              <div className={styles["btn"]}>Profile</div>
            </NavLink>
          </div>
        </div>
        <NavLink className={`${styles["logout"]} ${styles["btn"]}`} to="/logout">
          Sign out
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
