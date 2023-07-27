import { FaCircleCheck } from 'react-icons/fa6'

import config from '../../../../config';
import Image from '../../../../component/Image/Image';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SuggestedVideo.module.css'

function SuggestedVideo({ user }) {

    const navigate = useNavigate();

    const handleVideoPlay = (e) => {
        e.target.play();
    };

    const handleVideoPause = (e) => {
        e.target.pause();
        e.target.currentTime = 0;
    };

    return (
        <div className={styles['video-container']} key={user.id}>
            <div className={styles.link}>
                <Link
                    to={config.profileLink(user.userName)}
                    target='_blank'
                    className={styles['video-wrapper']}
                >
                    <video
                        className={styles.video}
                        src={user.popularVideo.fileUrl}
                        muted
                        loop
                        onMouseEnter={handleVideoPlay}
                        onMouseLeave={handleVideoPause}
                        poster={user.popularVideo.thumb_url}
                    />
                </Link>
                <div className={styles['info-container']}>
                    <Link
                        to={config.profileLink(user.userName)}
                        target='_blank'
                    >
                        <span className={styles.avatar}>
                            <Image alt='avatar' src={user.avatar} className={styles.img} />
                        </span>
                        <h3 className={styles.userName}>{user.userName}</h3>
                        <h4 className={styles.name}>
                            <span className={styles.span}> {user.name}</span>
                            {true && < FaCircleCheck className={styles.check} />}
                        </h4>
                    </Link>
                    <button className={styles.button} onClick={() => navigate(config.login)} >Follow</button>
                </div>
            </div>
        </div>
    )
}

export default SuggestedVideo