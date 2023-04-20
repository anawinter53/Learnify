import React, {useState} from "react";
import styles from "./index.module.css";


export default function UpdateDetailsForm({user}) {
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [conPassword, setConPassword] = useState("")

    const update = async (e) => {
        e.preventDefault()
    
        const data = { username, email, password };
    
        if (password !== conPassword) return;
    
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
    
        const res = await fetch(`http://localhost:8080/users/register`, options);

            
        if (res.ok) {
            navigate("/login")
        } else {
            console.log("Something failed, very sad! :(");
        }
    }

    return(
        <div className={styles["form"]}>
        <div className={styles["form-heading"]}>
          <h1>Update details</h1>
        </div>
        <form role='form' onSubmit={update}>
          <div className={styles["input"]}>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <span>Username</span>
          </div>
          <div className={styles["input"]}>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Email</span>
          </div>
          <div className={styles["input"]}>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span>Password</span>
          </div>
          <div className={styles["input"]}>
            <button className={styles["btn"]} type="submit" role='submit'>Submit</button>
          </div>
        </form>
      </div>
    )

}