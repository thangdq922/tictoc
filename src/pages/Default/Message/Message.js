import { LuSettings } from 'react-icons/lu'
import { useContext, useState } from 'react'
import dayjs from "dayjs";

import styles from './Message.module.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'
import { StompContext } from '../../../utils/StompClientProvider'
import httpRequest from '../../../utils/httpRequest'

function Message() {
    const client = useContext(StompContext);
    const [allMessages, setAllMessages] = useState([])
console.log(dayjs('2023-09-23' - dayjs('2023-09-23')) === 0)
    const openChatBox = async (e) => {
        try {
            const res = await httpRequest({
                method: 'get',
                url: `users/${e.currentTarget.id}/messages`,
            })
            setAllMessages(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    const setDay = (createdDay) => {
        if (dayjs().diff(createdDay, 'day') === 0) {
           return dayjs(createdDay).format('H:mm A')
        } else {
           return dayjs(createdDay).format('YYYY MMM DD')
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
                        <div className={styles.buttonSetting} >
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
                                                    <span className={styles.infoTime}>
                                                        { setDay(message.createdDay)}
                                                    </span>
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
                <div className={styles.chatboxContainer}>
                    {allMessages?.length !== 0 && <ChatBox data={allMessages} />}
                </div>
            </div>

        </div>
    )
}

export default Message