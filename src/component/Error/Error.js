import styles from "./Error.module.css";

function Error({ children }) {
  return <span className={styles.error}>{children}</span>;
}

export default Error;
