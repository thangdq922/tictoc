import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.css';
import Image from '../Image';


function AccountItem() {
    return (
        <div className={styles['wrapper']}>
            <Image
                className={styles['avatar']}
                src='https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/a16af9ec15cf7b3049eb33a387da2509~c5_300x300.webp?x-expires=1687053600&x-signature=hydbpoDrJrbQ1B1vzgHPuDrzDKI%3D'
                alt="Hoaa"
            />
            <div className={styles['info']}>
                <h4 className={styles['name']}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />
                </h4>
                <span className={styles['username']}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;