import { Link } from 'react-router-dom'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'
import { BsEmojiLaughing } from 'react-icons/bs'
import dayjs from "dayjs";
import { useEffect, useState } from 'react';

import Image from '../../../component/Image'
import styles from './Message.module.css'
import { getUser } from '../../../hooks/auth/user.localstore'
import config from "../../../config/routes";


function ChatBox({ data, stompClient }) {
    const userCurrent = getUser()?.data
    const [messages, setMessages] = useState(data);
    const [message, setMessage] = useState("");
    const userTo = messages[0]?.userTo.id === userCurrent.id ? messages[0]?.userFrom : messages[0]?.userTo

    const setDay = (createdDate) => {
        if (dayjs().diff(createdDate, 'day') === 0) {
            return dayjs(createdDate).format('H:mm A')
        } else {
            return dayjs(createdDate).format('D MMM YYYY H:mm')
        }
    }

    const sendMessage = () => {
        stompClient.subscribe('/user/queue/chatrooms', onMessageReceived);
        stompClient.send('/app/messages.sendMessage', { userName: userTo.userName }, message)
    }
    const onMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        messages.push(payloadData)
        setMessages([...messages])
        console.log(messages)

    }

    useEffect(() => {
        setMessages(data)
    }, [data])
    return (
        <>
            <div className={styles.chatHeader}>
                <Link className={styles.headerWrapper} to={config.profileLink(userTo.userName)} target='_blank'>
                    <Image
                        className={styles.avatar}
                        src={userTo.avatar}
                    />
                    <div style={{ marginLeft: 12 }}>
                        <p style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.5 }}>{userTo.userName}</p>
                        <p style={{ lineHeight: 1 }}>@{userTo.userName}</p>
                    </div>
                </Link>
            </div>
            <div className={styles.chatMain}>
                {messages?.map((mess, index) =>
                    <div className={styles.chatCotent} key={mess.id}>
                        {dayjs(mess.createdDate).diff(messages[index !== 0 ? index - 1 : 0].createdDate, 'day') !== 0 &&
                            <div className={styles.timeContainer}>
                                <span >{setDay(mess.createdDate)}</span>
                            </div>
                        }
                        {mess.userFrom.id === userCurrent?.id ?
                            <div className={styles.chatItem}>
                                <div className={styles.messageContainer}>
                                    <Link to={config.profileLink(mess.userFrom.userName)}>
                                        <Image className={styles.avatar}
                                            src={mess.userFrom.avatar}
                                        />
                                    </Link>
                                    <div className={styles.textContainer}
                                        style={{
                                            background: 'rgba(22, 24, 35, 0.06)',
                                            marginRight: 8,
                                            marginLeft: 0,
                                        }}>
                                        <p className={styles.text}>{mess.content}</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={styles.chatItem}>
                                <div className={styles.messageContainerReply}>
                                    <Link to={config.profileLink(mess.userTo.userName)}>
                                        <Image className={styles.avatar}
                                            src={mess.userFrom.avatar}
                                        />
                                    </Link>
                                    <div className={styles.textContainer}>
                                        <p className={styles.text}>{mess.content}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
            <div className={styles.chatBottom}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                    />
                    <div className={styles.iconContainer}>
                        <BsEmojiLaughing className={styles.icon} />
                    </div>
                </div>
                <PiPaperPlaneTiltFill size={35} className={styles.sendButton} onClick={sendMessage} />
            </div>
        </>
    )
}

export default ChatBox