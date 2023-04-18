import React from "react";
import styles from "./index.module.css"
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <NavLink to={"/dashboard/flashcards/Geography"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Geography</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/History"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>History</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Chemistry"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Chemistry</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Biology"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Biology</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Physics"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Physics</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Mathematics"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Mathematics</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/English"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>English</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1583361704493-d4d4d1b1d70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Sports"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Sports</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
      <NavLink to={"/dashboard/flashcards/Religious&Education"} className={styles["category-card"]}>
        <h1 className={styles["category-title"]}>Religious Education</h1>
        <div className={styles["category-background"]}></div>
        <img
          src="https://images.unsplash.com/photo-1624862761959-18b9c810825d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className={styles["category-image"]}
        />
      </NavLink>
    </>
  );
}
