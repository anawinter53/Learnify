import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UpdateDetailsForm } from "../../components";

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false)

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

  const openForm = () => {
    setToggle(!toggle)
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["profile"]}>
      <div className={styles.userProfile}>
        <h1 className={styles.username}>Username: {user?.username}</h1>
        <p className={styles.email}>Email: {user?.email}</p>
        <p className={styles.highscore}> Total XP: {user?.score}</p>
        <p className={styles.highscore}>Percentage: {user?.score_out_of == 0 ? 0 : Math.round((user?.score/user?.score_out_of) * 100)} %</p>
      </div>
      <button className={styles["form-btn"]} onClick={openForm}>Update your details</button>
      <div className={`${styles["details-form"]} ${styles[toggle ? 'open' : 'closed']}`}>
        <UpdateDetailsForm user={user} />
      </div>
      
    </div>

  );
}
