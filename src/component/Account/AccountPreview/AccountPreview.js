import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Button';
import styles from './AccountPreview.module.css';
import Image from '../../Image/Image';
import handleFollowFunc from '../../../services/user/followService';
import WrapperAuth from '../../WrapperAuth';
import { getUser } from '../../../hooks/auth/user.localstore';


function AccountPreview({ data }) {
    const [userChange, setUserChange] = useState(data);
    const userCurrent = getUser()?.data

    const handleFollow = async () => {
        if (!userCurrent) {
            return;
        }
        const isFollowed = await handleFollowFunc(userChange);
        setUserChange((user) => ({ ...user, isFollowed: isFollowed }));
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <Image
                    className={styles['avatar']}
                    src={userChange.avatar}
                    alt=""
                />

                <WrapperAuth>
                    <div onClick={handleFollow} style={{ cursor: 'pointer' }}>
                        {userChange.isFollowed ? (
                            <Button text className={styles['follow-btn']}>
                                Following
                            </Button>
                        ) : (
                            <Button primary className={styles['follow-btn']} >
                                Follow
                            </Button>
                        )}
                    </div>
                </WrapperAuth>
            </div>
            <div className={styles['body']}>
                <p className={styles['userName']}>
                    <strong>{userChange.userName}</strong>
                    <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />
                </p>
                <p className={styles['name']}>{userChange.name}</p>
                <p className={styles['analytics']}>
                    <strong className={styles['value']}>{userChange.followersCount}M </strong>
                    <span className={styles['label']}>Followers</span>
                    <strong className={styles['value']}>{userChange.likesCount}M </strong>
                    <span className={styles['label']}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;