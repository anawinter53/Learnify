import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";

export default function SideNav() {
  return (
    <>
      <nav className={styles["side-nav"]} role='navigation'>
        <div>
          <NavLink to="/" className={styles["title"]}>
            App Name
          </NavLink>
          <div className={styles["options"]} role='options'>
            <NavLink to="/dashboard" className={styles["btn"]}>Dashboard</NavLink>
            <NavLink to="/dashboard/quizzes" className={styles["btn"]}>Quizzes</NavLink>
            <NavLink to="/dashboard/flashcards" className={styles["btn"]}>Flashcards</NavLink>
            <NavLink to="/dashboard/friends" className={styles["btn"]}>Friends</NavLink>
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
