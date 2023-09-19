import { LuSettings } from 'react-icons/lu'
import { useContext } from 'react'

import styles from './Message.module.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'
import { StompContext } from '../../../utils/StompClientProvider'
import httpRequest from '../../../utils/httpRequest'
import { useState } from 'react'

function Message() {
    const client = useContext(StompContext);
    const [allMessages, setAllMessages] = useState([])

    const openChatBox = async (e) => {
        console.log(typeof e.currentTarget.id)
        try {
            const res = await httpRequest({
                method: 'get',
                url: `users/${e.currentTarget.id}/messages`,
            })
            setAllMessages(res.data)
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

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
                                    <div className={styles.itemWrapper}
                                        key={message.id} onClick={openChatBox}
                                        id={message.userTo.userName} >
                                        <div className={styles.itemInfo} >
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
                <ChatBox data={allMessages} />
            </div>

        </div>
    )
}

export default Message