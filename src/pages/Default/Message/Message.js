import { LuSettings } from 'react-icons/lu'

import styles from './Message.module.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'

function Message() {

    const cc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.listConversationContainer}>
                    <div className={styles.butonBack}>
                    </div>
                    <div className={styles.conversationHeader}>
                        <h1 className={styles.h1Header}>Messages</h1>
                        <div className={styles.buttonSetting}>
                            <LuSettings size={27} />
                        </div>
                    </div>
                    <div className={styles.listUserContainer}>
                        <div className={styles.scrollContainer}>
                            <div className={styles.scrollWrapper}>
                                {cc.map(c =>
                                    <div className={styles.itemWrapper}>
                                        <div className={styles.itemInfo}>
                                            <Image
                                                className={styles.avatar}
                                            />
                                            <div className={styles.infoText}>
                                                <p className={styles.userName}>jakiedi229</p>
                                                <p className={styles.infoExtractTime}>
                                                    <span className={styles.infoExtract}>a</span>
                                                    <span className={styles.infoTime}>1:50 PM</span>
                                                </p>
                                            </div>
                                        </div>
                                        <HiOutlineDotsHorizontal size={20} style={{ cursor: 'pointer', }} />
                                    </div>
                                )}
                            </div>
                            <div className={styles.scrollBar}>
                                <div className={styles.scrollBarThumb}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ChatBox />
            </div>

        </div>
    )
}

export default Message