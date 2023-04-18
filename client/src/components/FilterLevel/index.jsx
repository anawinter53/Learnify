import { useState } from "react";
import styles from "./index.module.css";

export default function FilterLevels() {
  const [level, setLevel] = useState("");

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className={styles["filter"]}>
      <div className={styles["container"]}>
        <div className={styles["level-dropdown-container"]}>
          <select
            value={level}
            onChange={handleLevelChange}
            className={styles["level-dropdown"]}
          >
            <option disabled value="">
              Select a level
            </option>
            <option value="gcse">GCSE</option>
            <option value="alevel">A-Level</option>
          </select>
          <div className={styles["level-dropdown-arrow"]} />
        </div>
      </div>
    </div>
  );
}
