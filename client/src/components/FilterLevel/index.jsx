import { useState } from "react";
import styles from "./index.module.css";

export default function FilterLevels({level, setLevel}) {
  // const [level, setLevel] = useState("");

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["container"]} role='container'>
        <p>Select level to revise:</p>
        <div className={styles["level-radio-container"]}>
          <input type="radio" value="gcse" id="gcse" name="level" onChange={handleLevelChange} className={styles["level-radio"]} checked/>
          <label for="gcse" className={styles["level-radio-label"]}>GCSE</label>
          <input type="radio" value="a-level" id="a-level" name="level" onChange={handleLevelChange} className={styles["level-radio"]}/>
          <label for="a-level" className={styles["level-radio-label"]}>A-Level</label>
        </div>
      </div>
    </div>
  );
}
