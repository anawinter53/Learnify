import styles from "./index.module.css";
import { PostIt, PostItSummary } from "../../components";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles["landing"]}>
      <div className={styles["container"]}>
        <PostIt />
        <div className={styles["info"]}>
          <h1 className={styles["slogan"]}>
            Join our community of learners today and unlock your full potential.
          </h1>
          <NavLink to="/signup" className={styles["btn"]}>
            Get Started!
          </NavLink>
        </div>
      </div>
      <PostItSummary colour="orange" reverse={false} />
      <PostItSummary colour="red" reverse={true} />
      <PostItSummary colour="green" reverse={false} />
      <PostItSummary colour="blue" reverse={true} />
    </div>
  );
}
