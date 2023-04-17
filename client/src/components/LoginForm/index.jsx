import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function LoginForm() {
  return (
    <div className={styles["form"]}>
      <div className={styles["form-heading"]}>
        <h1>Login</h1>
      </div>
      <form role='form'>
        <div className={styles["input"]}>
          <input type="text" id="username" required />
          <span>Username</span>
        </div>
        <div className={styles["input"]}>
          <input type="password" id="password" required />
          <span>Password</span>
        </div>
        <div className={styles["input"]}>
          <button className={`${styles["btn"]}`} type="submit">Submit</button>
        </div>
        <p>Forgot Password</p>
        <NavLink className={styles["redirect-signup"]} to="/signup">Don't have an account yet? Sign Up</NavLink>
      </form>
    </div>
  );
}
