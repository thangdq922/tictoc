import { LuSettings } from 'react-icons/lu'
import { useContext } from 'react'

import styles from './Message.module.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'
import { getUser } from '../../../hooks/auth/user.localstore';
import { StompContext } from '../../../utils/StompClientProvider'

function Message() {
    const userCurrent = getUser()?.data
    const client = useContext(StompContext);

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
                                {client.messages?.map(message =>
                                    <div className={styles.itemWrapper} key={message.id} >
                                        <div className={styles.itemInfo}>
                                            <Image
                                                className={styles.avatar}
                                                src={message.userTo.avatar}
                                                alt={message.userTo.name}
                                            />
                                            <div className={styles.infoText}>
                                                <p className={styles.userName}>{message.userTo.userName}</p>
                                                <p className={styles.infoExtractTime}>
                                                    <span className={styles.infoExtract}>{message.content}</span>
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