import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";

export default function SideNav() {
  return (
    <>
      <nav className={styles["side-nav"]}>
        <div>
          <NavLink to="/" className={styles["title"]}>
            App Name
          </NavLink>
          <div className={styles["options"]}>
            <div className={styles["btn"]}>Button 1</div>
            <div className={styles["btn"]}>Button 2</div>
            <div className={styles["btn"]}>Button 3</div>
            <div className={styles["btn"]}>Button 4</div>
          </div>
        </div>
        <NavLink className={`${styles["logout"]} ${styles["btn"]}`} to="/login">
          Sign out
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
