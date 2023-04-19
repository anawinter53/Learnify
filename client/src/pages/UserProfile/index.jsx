import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const userId = localStorage.getItem('user_id');

      const response = await fetch(`http://localhost:8080/users/username/single/${userId}`, {
        
      });
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userProfile}>
      <h1 className={styles.username}>Username: {user?.username}</h1>
      <p className={styles.email}>Email: {user?.email}</p>
      <p className={styles.highscore}>High Score: {user?.highscore}</p>
      <p className={styles.highscore}>Points: {user?.score}</p>
      <p className={styles.highscore}>Percentage: {user?.score_out_of == 0 ? 0 : Math.round((user?.score/user?.score_out_of) * 100)} %</p>
    </div>
  );
}
