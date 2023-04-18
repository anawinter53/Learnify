import styles from "./index.module.css";
import { PostIt, PostItSummary } from "../../components";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function Landing() {

  const card0Ref = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  return (
    <div className={styles["landing"]}>
      <div className={styles["container"]}>
        <PostIt card0={card0Ref} card1={card1Ref} card2={card2Ref} card3={card3Ref}/>
        <div className={styles["info"]}>
          <h1 className={styles["slogan"]}>
            Join our community of learners today and unlock your full potential.
          </h1>
          <NavLink to="/signup" className={styles["btn"]} role='button'>
            Get Started!
          </NavLink>
        </div>
        <div className={styles["post-it-summary"]}>  
          <PostItSummary ref={card0Ref} colour="orange" reverse={false} />
          <PostItSummary ref={card1Ref} colour="red" reverse={true} />
          <PostItSummary ref={card2Ref} colour="green" reverse={false} />
          <PostItSummary ref={card3Ref} colour="blue" reverse={true} />
        </div>
      </div>
    </div>
  );
}
