import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Image from '../../../component/Image'
import styles from './notify.module.css'
import { Link, useLocation } from 'react-router-dom'
import config from '../../../config'
import { deleteNotifs } from '../../../services/notifService'
import { useContext } from 'react'
import { StompContext } from '../../../utils/NotifProvider'
import { getUser } from '../../../hooks/auth/user.localstore'

function NotifyItem({ notifs }) {
    const location = useLocation();
    const client = useContext(StompContext)

    const deleteNotif = async () => {
       await deleteNotifs()
       client.stompClient.send('/app/notification', {}, getUser()?.data?.userName)
    }
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
            <div onClick={deleteNotif}>clear all</div>
        </ul>
    )
}

export default NotifyItem