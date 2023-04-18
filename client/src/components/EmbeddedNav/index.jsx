import { NavLink, useLocation } from "react-router-dom";
import styles from "../../layouts/LandingNav/index.module.css";
import { useAuth } from "../../context/AuthContext";

export default function EmbeddedNav() {
  const location = useLocation()
  const { auth } = useAuth()

  return (
    <nav
      className={styles["nav"]}
      style={{ position: "relative", background: "transparent" }}
    >
      <div>
        <NavLink to="/" className={styles["title"]}>
          App Name
        </NavLink>
      </div>
      <div>
        {!auth ? (
          location.pathname === "/login" ? (
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
          )
        ) : (
          <NavLink className={`${styles["logout"]} ${styles["btn"]}`} to="/logout">
            Sign out
          </NavLink>
        )}
      </div>
    </nav>
  );
}
