import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { EmbeddedNav } from "../../components";
import { useAuth } from "../../context/AuthContext";

export default function LandingNav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const { auth } = useAuth()
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
          <NavLink to="/dashboard" className={styles["btn"]}>Dashboard</NavLink>
          <NavLink to="/dashboard/quizzes" className={styles["btn"]}>Quizzes</NavLink>
          <NavLink to="/dashboard/flashcards" className={styles["btn"]}>Flashcards</NavLink>
          <NavLink to="/dashboard/userprofile" className={styles["btn"]}>User Profile</NavLink>
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
      <Outlet />
    </>
  );
}
