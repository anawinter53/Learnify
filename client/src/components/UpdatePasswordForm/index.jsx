import React, {useState} from "react";
import styles from "./index.module.css";


export default function UpdateDetailsForm({user}) {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [conNewPassword, setConNewPassword] = useState("")

    const update = async (e) => {
        e.preventDefault()
    
        const data = { oldPassword, newPassword };
    
        if (newPassword !== conNewPassword) return;
    
        const options = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
    
        const res = await fetch(`http://localhost:8080/users/password/${user.id}`, options);

            
        if (res.ok) {
            console.log("password updated")
            window.location.reload(false)
        } else {
            console.log("Something failed, very sad! :(");
        }
    }

    return(
        <div className={styles["form"]}>
        <div className={styles["form-heading"]}>
          <h1>Update password</h1>
        </div>
        <form role='form' onSubmit={update}>
        <div className={styles["input"]}>
          <input type="password" id="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
          <span>Old Password</span>
        </div>
          <div className={styles["input"]}>
            <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <span> New Password</span>
          </div>
          <div className={styles["input"]}>
            <input type="password" id="conNewPassword" value={conNewPassword} onChange={(e) => setConNewPassword(e.target.value)} required />
            <span>Confirm New Password</span>
          </div>
          <div className={styles["input"]}>
            <button className={styles["btn"]} type="submit" role='submit'>Submit</button>
          </div>
        </form>
      </div>
    )

}