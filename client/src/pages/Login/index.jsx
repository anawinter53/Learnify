import styles from "./index.module.css";
import { LoginForm } from "../../components";

export default function Login() {
  return (
    <div className={styles["login"]}>
      <div className={styles["container"]}>
        <LoginForm />
      </div>
    </div>
  );
}
