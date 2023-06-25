import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Button';
import styles from './AccountPreview.module.css';
import Image from '../../Image/Image';


function AccountPreview({data}) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <Image
                    className={styles['avatar']}
                    src={data.avatar}
                    alt=""
                />
                <Button className={styles['follow-btn']} primary>
                    Follow
                </Button>
            </div>
            <div className={styles['body']}>
                <p className={styles['nickname']}>
                    <strong>{data.nickname}</strong>
                    <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />
                </p>
                <p className={styles['name']}>{data.full_name}</p>
                <p className={styles['analytics']}>
                    <strong className={styles['value']}>{data['followers_count']}M </strong>
                    <span className={styles['label']}>Followers</span>
                    <strong className={styles['value']}>8.2M </strong>
                    <span className={styles['label']}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;