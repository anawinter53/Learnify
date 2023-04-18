import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";

export default function Categories() {
  const location = useLocation();
  const { category } = useCategory();

  return (
    <>
      {category.map((c) => {
        return Object.entries(c).map((key, i) => {
          return (
            <NavLink to={(location.pathname === "/dashboard/flashcards" ? "/dashboard/flashcards/" : "/dashboard/quizzes/") + key[1].name} className={styles["category-card"]}>
              <h1 className={styles["category-title"]}>{key[1].name}</h1>
              <div className={styles["category-background"]}></div>
              <img
                src={key[1].image}
                className={styles["category-image"]}
              />
            </NavLink>
          )
        });
      })}
    </>
  );
}
