// import React, { useState } from 'react'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import { useContext, useEffect, useState } from 'react'

import styles from './notify.module.css'
import NotifyItem from './notifyItem'
import { InboxIcon } from '../../../component/Icons'
import { StompContext } from '../../../utils/NotifProvider'
import { saveStatus } from '../../../services/notifService'

function Notify() {

    const stompClient = useContext(StompContext);
    const [visible, setVisible] = useState(false);
    const [badge, setBadge] = useState()

    const controlVisible = () => {
        setVisible(!visible)
        saveStatus()
        setBadge(0)
    }
    useEffect(() => {
        setBadge(stompClient.notifs?.length)
        if (badge < stompClient.notifs?.length) {
            setBadge(stompClient.notifs[0]?.countNotRead)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stompClient])


    const Item = (attrs) => {
        return (
            <div className={styles.container} tabIndex="-1" {...attrs}>
                <div className={styles.header}>
                    <h2 className={styles.headerTitle}>
                        Notifications
                    </h2>
                    <div className={styles.inboxBar}>
                        <button className={styles.headerButton}>
                            All activity
                        </button>
                        <button className={styles.headerButton}>
                            Likes
                        </button>
                        <button className={styles.headerButton}>
                            Comments
                        </button>
                        <button className={styles.headerButton}>
                            Mentions and tags
                        </button>
                        <button className={styles.headerButton}>
                            Followers
                        </button>
                    </div>
                </div>

                <div className={styles['notify-list']}>
                    <p className={styles.listTitle}> New</p>
                    <NotifyItem notifs={stompClient.notifs} />
                </div>
            </div>
        )
    }

    return (
        <Tippy placement='bottom'
            animation='perspective'
            theme={'light'}
            interactive={true}
            visible={visible}
            content={<Item notifs={stompClient.notifs} />}
            onClickOutside={controlVisible}
        >
            <Tippy delay={[0, 50]} content="Notification" >
                <div className={styles['action-btn']} onClick={controlVisible}>
                    <InboxIcon />
                    {badge !== 0 && <span className={styles['badge']}>{badge}</span>}
                </div>
            </Tippy>
        </Tippy>
    )
}

export default Notify