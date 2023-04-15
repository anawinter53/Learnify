import styles from "./index.module.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function LandingNav() {
  const location = useLocation();

  return (
    <>
      <nav>
        <div>
          <NavLink to="/" className={styles["title"]}>
            App Name
          </NavLink>
        </div>
        <div className={styles["options"]}>
          <div className={styles["btn"]}>Button 1</div>
          <div className={styles["btn"]}>Button 2</div>
          <div className={styles["btn"]}>Button 3</div>
          <div className={styles["btn"]}>Button 4</div>
        </div>
        <div>
          {location.pathname === "/login" ? (
            <NavLink className={`${styles["signup"]} ${styles["btn"]}`} to="/signup">Sign up</NavLink>
          ) : (
            <NavLink className={`${styles["login"]} ${styles["btn"]}`} to="/login">Login</NavLink>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
