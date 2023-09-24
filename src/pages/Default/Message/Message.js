import { LuSettings } from 'react-icons/lu'
import { useContext, useEffect, useState } from 'react'
import dayjs from "dayjs";


import styles from './Message.module.css'
import Image from '../../../component/Image'
import ChatBox from './Chatbox'
import { StompContext } from '../../../utils/StompClientProvider'
import { getUser } from '../../../hooks/auth/user.localstore';
import { useLocation } from 'react-router-dom';

function Message() {
    const client = useContext(StompContext);
    const location = useLocation();
    const [chatroom, setChatroom] = useState([])
    const [messages, setMessages] = useState([]);

    const userCurrent = getUser()?.data
    const userRoom = location.state && location.state?.userRoom;
    const userTo = (mess) => mess.userTo.id === userCurrent.id ? mess.userFrom : mess.userTo

    useEffect(() => {
        setMessages(client.messages)
    }, [client.messages])

    useEffect(() => {
        userRoom?.constructor === Array && setChatroom(userRoom)
    }, [userRoom])

    const openChatBox = (e) => {
        client.stompClient.subscribe('/user/queue/chatroom', onChatroomReceived);
        client.stompClient.send('/app/messages.chatroom', { page: 1 }, e.currentTarget.id)
    }

    const onChatroomReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        console.log(payloadData)
        setChatroom(payloadData.content.slice().reverse())
    }
    // const onMessReceived = (payload) => {
    //     var payloadData = JSON.parse(payload.body);
    //     console.log(payloadData)
    //     console.log(chatroom[0])
    //     payloadData.id !== chatroom[0]?.id && setChatroom((prev) => [payloadData, ...prev ])
    //     console.log(chatroom)
    // }

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
                                {(userRoom && userRoom?.constructor !== Array) &&
                                    <div className={styles.itemWrapper}
                                        key={userRoom?.id} 
                                        onClick={openChatBox}
                                        id={userRoom?.userName} 
                                        tabIndex="1"
                                        >
                                        <div className={styles.itemInfo} >
                                            <Image
                                                className={styles.avatar}
                                                src={userRoom?.avatar}
                                                alt={userRoom?.name}
                                            />
                                            <div className={styles.infoText}>
                                                <p className={styles.userName}>
                                                    {userRoom?.userName}
                                                </p>
                                                <p className={styles.infoExtractTime}>
                                                    <span className={styles.infoExtract}></span>
                                                    <span className={styles.infoTime}>
                                                        {dayjs().format('H:mm A')}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {messages?.map(mess =>
                                    <div className={styles.itemWrapper}
                                        key={mess.id} 
                                        onClick={openChatBox}
                                        id={userTo(mess).userName} 
                                        tabIndex="1"
                                        >
                                        <div className={styles.itemInfo} >
                                            <Image
                                                className={styles.avatar}
                                                src={userTo(mess).avatar}
                                                alt={userTo(mess).name}
                                            />
                                            <div className={styles.infoText}>
                                                <p className={styles.userName}>
                                                    {userTo(mess).userName}
                                                </p>
                                                <p className={styles.infoExtractTime}>
                                                    <span className={styles.infoExtract}>{mess.content}</span>
                                                    <span className={styles.infoTime}>
                                                        {setDay(mess.createdDate)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
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
                    {(chatroom?.length !== 0 || userRoom) &&
                        <ChatBox data={chatroom} stompClient={client.stompClient} userRoom={userRoom} />}
                </div>
            </div>

        </div>
    )
}

export default Message