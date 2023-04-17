import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function LoginForm() {
  return (
    <div className={styles["form"]}>
      <div className={styles["form-heading"]}>
        <h1>Sign up</h1>
      </div>
      <form role='form'>
        <div className={styles["input"]}>
          <input type="text" id="username" required />
          <span>Username</span>
        </div>
        <div className={styles["input"]}>
          <input type="text" id="email" required />
          <span>Email</span>
        </div>
        <div className={styles["input"]}>
          <input type="password" id="password" required />
          <span>Password</span>
        </div>
        <div className={styles["input"]}>
          <input type="password" id="conPassword" required />
          <span>Confirm Password</span>
        </div>
        <div className={styles["input"]}>
          <button className={styles["btn"]} type="submit">Submit</button>
        </div>
        <NavLink className={styles["redirect-login"]} to="/login">Already have an account? Sign in</NavLink>
      </form>
    </div>
  );
}
