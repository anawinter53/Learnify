import { useState } from "react";
import styles from "./index.module.css";

export default function FilterLevels({level, setLevel}) {
  // const [level, setLevel] = useState("");

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["container"]}>
        <p>Select level to revise:</p>
        <div className={styles["level-radio-container"]}>
          {/* <select
            value={level}
            onChange={handleLevelChange}
            className={styles["level-dropdown"]}
          >
            <option disabled value="">
              Select a level
            </option>
            <option value="gcse">GCSE</option>
            <option value="a-level">A-Level</option>
          </select> */}
          <input type="radio" value="gcse" id="gcse" name="level" onChange={handleLevelChange} className={styles["level-radio"]} checked/>
          <label for="gcse" className={styles["level-radio-label"]}>GCSE</label>
          <input type="radio" value="a-level" id="a-level" name="level" onChange={handleLevelChange} className={styles["level-radio"]}/>
          <label for="a-level" className={styles["level-radio-label"]}>A-Level</label>
          {/* <div className={styles["level-dropdown-arrow"]} /> */}
        </div>
      </div>
    </div>
  );
}
