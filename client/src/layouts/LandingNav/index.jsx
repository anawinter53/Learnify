import styles from "./index.module.css"
import { Outlet, NavLink } from "react-router-dom"

export default function LandingNav() {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/" className={styles["title"]}>App Name</NavLink>
        </div>
        <div className={styles["options"]}>
          <div className={styles["btn"]}>Button 1</div>
          <div className={styles["btn"]}>Button 2</div>
          <div className={styles["btn"]}>Button 3</div>
          <div className={styles["btn"]}>Button 4</div>
        </div>
        <div>
          <NavLink to="/login" className={`${styles["login"]} ${styles["btn"]}`}>Login</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
