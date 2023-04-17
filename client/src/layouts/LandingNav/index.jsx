import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { EmbeddedNav } from "../../components";

export default function LandingNav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef();
  
  const toggleVisible = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop >= 100){
      setShowNav(true);
    } 
    else if (scrollTop <= 100){
      setShowNav(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <EmbeddedNav />
      <nav
        role='nav'
        className={styles["nav"]}
        ref={navRef}
        style={{ top: showNav ? "0" : "-100px", transition: "top 0.3s" }}
      >
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

      <Outlet />
    </>
  );
}
