import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Loader.module.css";


function Loader() {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
    </div>
  );
}

export default Loader;
