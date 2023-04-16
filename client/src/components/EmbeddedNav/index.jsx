import { NavLink, useLocation } from "react-router-dom";
import styles from "../../layouts/LandingNav/index.module.css";

export default function index() {
  const location = useLocation()

  return (
    <nav
      style={{ position: "relative", background: "transparent" }}
    >
      <div>
        <NavLink to="/" className={styles["title"]}>
          App Name
        </NavLink>
      </div>
      <div>
        {location.pathname === "/login" ? (
          <NavLink
            className={`${styles["signup"]} ${styles["btn"]}`}
            to="/signup"
          >
            Sign up
          </NavLink>
        ) : (
          <NavLink
            className={`${styles["login"]} ${styles["btn"]}`}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
