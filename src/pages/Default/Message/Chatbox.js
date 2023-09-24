import { Link } from 'react-router-dom'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'
import { BsEmojiLaughing } from 'react-icons/bs'
import dayjs from "dayjs";
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

import Image from '../../../component/Image'
import styles from './Message.module.css'
import { getUser } from '../../../hooks/auth/user.localstore'
import config from "../../../config/routes";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../../component/Loader/Loader';
import { getChatroom } from '../../../services/messageService';


function ChatBox({ data, stompClient, userRoom }) {
    const userCurrent = getUser()?.data
    const [messages, setMessages] = useState(data);
    const [message, setMessage] = useState("");

    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    const userTo = messages.length === 0 ? userRoom :
        messages[0]?.userTo.id === userCurrent.id ? messages[0]?.userFrom : messages[0]?.userTo

    useEffect(() => {
        setMessages(data)
        setHasMore(true)
        setPage(2)
        if (data.length < 15) {
            setHasMore(false);
        }
    }, [data])

    const checkDay =
        (mess, index) => dayjs(mess.createdDate).diff(messages[index !== messages.length - 1 ? index + 1 : messages.length - 1].createdDate, 'day') !== 0

    const setDay = (createdDate) => {
        if (dayjs().diff(createdDate, 'day') === 0) {
            return dayjs(createdDate).format('H:mm A')
        } else {
            return dayjs(createdDate).format('D MMM YYYY H:mm')
        }
    }

    const sendMessage = async () => {
        await stompClient.send('/app/messages.sendMessage', { userNameTo: userTo.userName }, message)
        setMessage("")
    }

    const setStatus = () => {
        (!messages[0].status && messages[0].userTo.id === userCurrent.id) && stompClient.send('/app/messages.setStatus', {}, userTo.userName)
    }

    const deletMessage = (mess) => {
        stompClient.send('/app/messages.delete', {}, JSON.stringify(mess))
    }

    const Delete = ({ mess }) => {
        return <p style={{ cursor: 'pointer' }} onClick={() => deletMessage(mess)}>
            Delete
        </p>
    }

    const fetchListMessages = async () => {
        const result = await getChatroom(userTo.userName, page);
        console.log(result)
        return result.content.slice().reverse();
    };

    const fetchData = async () => {
        const listMessagesNext = await fetchListMessages();

        setMessages([...listMessagesNext, ...messages]);
        if (listMessagesNext.length === 0) {
            setHasMore(false);
        }
        setPage((prev) => prev + 1);
    };

    console.log(messages.slice().reverse())
    console.log(hasMore)
    return (
        <>
            <div className={styles.chatHeader}>
                <Link className={styles.headerWrapper} to={config.profileLink(userTo?.userName)} target='_blank'>
                    <Image
                        className={styles.avatar}
                        src={userTo?.avatar}
                    />
                    <div style={{ marginLeft: 12 }}>
                        <p style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.5 }}>{userTo?.userName}</p>
                        <p style={{ lineHeight: 1 }}>@{userTo?.userName}</p>
                    </div>
                </Link>
            </div>
            <div className={styles.chatMain} id='chatMain'>
                <InfiniteScroll
                    dataLength={messages.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<Loader />}
                    style={{ overflow: "inherit" }}
                    inverse='true'
                    scrollableTarget='chatMain'
                >
                    {messages?.map((mess, index) =>
                        <div className={styles.chatCotent} key={mess.id}>
                            {checkDay(mess, index) &&
                                <div className={styles.timeContainer}>
                                    <span >{setDay(mess.createdDate)}</span>
                                </div>
                            }
                            {mess.userFrom.id === userCurrent?.id ?

                                <div className={styles.chatItem}>

                                    <div className={styles.messageContainer}>
                                        <div className={styles.textContainer}
                                            style={{
                                                background: 'rgba(22, 24, 35, 0.06)',
                                                marginRight: 8,
                                                marginLeft: 0,
                                            }}>
                                            <p className={styles.text}>{mess.content}</p>
                                        </div>
                                        <Tippy
                                            placement='top'
                                            interactive={true}
                                            content={<Delete mess={mess} />}
                                            offset={[0, -3]}
                                        >
                                            <div>
                                                <HiOutlineDotsHorizontal size={20} className={styles.iconTool} />
                                            </div>
                                        </Tippy>
                                    </div>

                                    {(mess.id === messages[0].id && mess.status) &&
                                        <Image className={styles.seen} src={mess.userTo.avatar} />
                                    }

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
                                        <HiOutlineDotsHorizontal size={20} className={styles.iconTool} />
                                    </div>
                                </div>
                            }

                        </div>
                    )}
                </InfiniteScroll>
            </div>
            <div className={styles.chatBottom}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        value={message}
                        onInput={(e) => { setMessage(e.target.value) }}
                        onFocus={setStatus}
                        onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    />
                    <div className={styles.iconContainer}>
                        <BsEmojiLaughing className={styles.icon} />
                    </div>
                </div>
                {message !== "" &&
                    <PiPaperPlaneTiltFill
                        size={35}
                        className={styles.sendButton}
                        onClick={sendMessage}
                    />}
            </div>
        </>
    )
}

export default ChatBox