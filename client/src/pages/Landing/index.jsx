import styles from "./index.module.css";
import { PostIt, PostItSummary } from "../../components";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  MdDashboard,
  BsQuestionSquareFill,
  BsCardText,
  FaUserAlt,
} from "react-icons/all";

export default function Landing() {
  const card0Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const { auth } = useAuth();

  return (
    <div className={styles["landing"]}>
      <div className={styles["container"]}>
        <PostIt
          card0={card0Ref}
          card1={card1Ref}
          card2={card2Ref}
          card3={card3Ref}
        />
        <div className={styles["info"]}>
          <h1 className={styles["slogan"]}>
            Join our community of learners today and unlock your full potential.
          </h1>
          {!auth ? (
            <NavLink to="/signup" className={styles["btn"]} role="button">
              Get Started!
            </NavLink>
          ) : (
            <NavLink to="/dashboard" className={styles["btn"]} role="button">
              Continue to Dashboard!
            </NavLink>
          )}
        </div>
        <div className={styles["post-it-summary"]}>
          <PostItSummary
            ref={card0Ref}
            colour="orange"
            reverse={false}
            message={
              "Keep your favorite and created flashcards at your fingertips with our user-friendly dashboard!"
            }
            icon={MdDashboard}
            heading={"Dashboard"}
          />
          <PostItSummary
            ref={card1Ref}
            colour="red"
            reverse={true}
            message={
              "Expand your knowledge with a wide range of categories to choose from, including geography, history, chemistry, biology, physics, maths, sports science, and religious education!"
            }
            icon={BsQuestionSquareFill}
            heading={"Quizzes"}
          />
          <PostItSummary
            ref={card2Ref}
            colour="green"
            reverse={false}
            message={
              "Test your skills and challenge yourself with a variety of categories to choose from, including geography, history, chemistry, biology, physics, maths, sports science, and religious education, and pick your difficulty level, GCSE or A-Level!"
            }
            icon={BsCardText}
            heading={"Flashcard"}
          />
          <PostItSummary
            ref={card3Ref}
            colour="blue"
            reverse={true}
            message={
              "Track your progress, compete with other users, and customize your experience with our user profile page, which displays your total XP, average quiz accuracy, and quizzes played. Plus, update your details with ease and keep your account secure with the ability to update your password!"
            }
            icon={FaUserAlt}
            heading={"User Profile"}
          />
        </div>
      </div>
    </div>
  );
}
