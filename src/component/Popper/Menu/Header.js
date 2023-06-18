import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.css';


function Header({ title, onBack }) {
    return (
        <header className={styles['header']}>
            <button className={styles['back-btn']} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={styles['header-title']}>{title}</h4>
        </header>
    );
}

export default Header;