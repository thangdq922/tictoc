import styles from './Popper.module.css';


function Wrapper({ children, className }) {
    return <div className={`${styles.wrapper} ${styles.className}`}>{children}</div>;
}

export default Wrapper;