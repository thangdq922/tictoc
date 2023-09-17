import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Image from '../../../component/Image'
import styles from './notify.module.css'
import { Link, useLocation } from 'react-router-dom'
import config from '../../../config'


function NotifyItem({ notifs }) {
    const location = useLocation();

    return (
        <ul className={styles.listItem}>
            {notifs?.map(notif =>
                <Link
                    to={notif.notificationType === 'FOLLOW' ?
                        config.profileLink(notif.userFrom.name) : config.videoLink(notif.video)}
                    state={{
                        videoDetail: true,
                        video: notif.video,
                        prevPath: location.pathname,
                        openModel: true,
                    }}
                    className={styles.itemWrapper} key={notif.id}
                >
                    <div className={styles.item}>
                        <Image
                            className={styles.avatar}
                            src={notif.userFrom.avatar}
                            alt={notif.userFrom.name}
                        />
                        <div className={styles.info}>
                            <h4 className={styles.username}>
                                <span>{notif.userFrom.userName}</span>
                                {notif.userFrom.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                            </h4>
                            <p className={styles.message}>{notif.content}</p>
                        </div>
                    </div>
                </Link>
            )}
        </ul>
    )
}

export default NotifyItem