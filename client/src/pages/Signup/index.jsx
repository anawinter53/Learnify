import styles from "./index.module.css";
import { SignupForm } from "../../components";

export default function Signup() {
  return (
    <div className={styles["signup"]}>
      <div className={styles["container"]}>
        <SignupForm />
      </div>
    </div>
  );
}
