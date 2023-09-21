import { LuSettings } from 'react-icons/lu'
import { useContext, useState } from 'react'
import dayjs from "dayjs";

import styles from './Message.module.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'
import { StompContext } from '../../../utils/StompClientProvider'
import { getUser } from '../../../hooks/auth/user.localstore';

function Message() {
    const client = useContext(StompContext);
    const [allMessages, setAllMessages] = useState([])
    const userCurrent = getUser()?.data

    const openChatBox =  (e) => {
        client.stompClient.subscribe('/user/queue/chatroom', (data) => console.log(data));
        client.stompClient.send('/app/messages.chatroom', {userName: userCurrent.userName}, e.currentTarget.id)
    }

    const setDay = (createdDate) => {
        if (dayjs().diff(createdDate, 'day') === 0) {
            return dayjs(createdDate).format('H:mm A')
        } else {
            return dayjs(createdDate).format('D/M/YYYY')
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
                                        id={message.userTo.id !== userCurrent?.id ? message.userTo.userName : message.userFrom.userName} >
                                        <div className={styles.itemInfo} >
                                            <Image
                                                className={styles.avatar}
                                                src={message.userTo.avatar}
                                                alt={message.userTo.name}
                                            />
                                            <div className={styles.infoText}>
                                                <p className={styles.userName}>
                                                    {message.userTo.id !== userCurrent.id ? message.userTo.userName : message.userFrom.userName}
                                                </p>
                                                <p className={styles.infoExtractTime}>
                                                    <span className={styles.infoExtract}>{message.content}</span>
                                                    <span className={styles.infoTime}>
                                                        {setDay(message.createdDate)}
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
                    {allMessages?.length !== 0 && <ChatBox data={allMessages} stompClient={client.stompClient} />}
                </div>
            </div>

        </div>
    )
}

export default Message