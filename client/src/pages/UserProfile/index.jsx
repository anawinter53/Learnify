import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UpdateDetailsForm, UpdatePasswordForm } from "../../components";

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [toggleDetailsForm, setToggleDetailsForm] = useState(false)
  const [togglePasswordForm, setTogglePasswordForm] = useState(false)

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

  const openDetailsForm = () => {
    setToggleDetailsForm(!toggleDetailsForm)
    setTogglePasswordForm(false)
  }

  const openPasswordForm = () => {
    setTogglePasswordForm(!togglePasswordForm)
    setToggleDetailsForm(false)
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["profile"]}>
      <div className={styles.userProfile}>
        <h1 className={styles.username}>Username: {user?.username}</h1>
        <p className={styles.email} role='email'>Email: {user?.email}</p>
        <p className={styles.highscore} role='points'> Total XP: {user?.score}</p>
        <p className={styles.highscore} role='percentage'>Percentage: {user?.score_out_of == 0 ? 0 : Math.round((user?.score/user?.score_out_of) * 100)} %</p>
      </div>
      <button className={styles["form-btn"]} onClick={openDetailsForm}>Update your details</button>
      <button className={styles["password-form-btn"]} onClick={openPasswordForm}>Update your password</button>
      <div className={`${styles["details-form"]} ${styles[toggleDetailsForm ? 'open' : 'closed']}`}>
        <UpdateDetailsForm user={user} />
      </div>
      <div className={`${styles["password-form"]} ${styles[togglePasswordForm ? 'open' : 'closed']}`}>
        <UpdatePasswordForm user={user} />
      </div>
      
      
    </div>

  );
}
