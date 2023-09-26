import React from "react";
import styles from "./Loader.module.css";
import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className={styles.wrapper}>
      <FaSpinner className={styles.spinner} />
    </div>
  );
}

export default Loading;
