
import { Link } from 'react-router-dom'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'
import { BsEmojiLaughing } from 'react-icons/bs'
import dayjs from "dayjs";

import Image from '../../../component/Image'
import styles from './Message.module.css'
import { getUser } from '../../../hooks/auth/user.localstore'

function ChatBox({ data }) {
    const userCurrent = getUser()?.data

    console.log(data)
    return (
        <>
            <div className={styles.chatHeader}>
                <Link className={styles.headerWrapper}>
                    <Image
                        className={styles.avatar}
                        src={data[0]?.userTo.avatar}
                    />
                    <div style={{ marginLeft: 12 }}>
                        <p style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.5 }}>{data[0]?.userTo.userName}</p>
                        <p style={{ lineHeight: 1 }}>@{data[0]?.userTo.userName}</p>
                    </div>
                </Link>
            </div>
            <div className={styles.chatMain}>
                {data.map((mess, index) =>
                    <div className={styles.chatCotent} key={mess.id}>
                        {dayjs(mess.createdDay).diff(data[index - 1].createdDay, 'day') === 0 &&
                            <div className={styles.timeContainer}>
                                <span>7:34 PM</span>
                            </div>
                        }
                        {mess.userFrom.id === userCurrent?.id ?
                            <div className={styles.chatItem}>
                                <div className={styles.messageContainer}>
                                    <Link>
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
                                    <Link>
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
                    <input className={styles.input} />
                    <div className={styles.iconContainer}>
                        <BsEmojiLaughing className={styles.icon} />
                    </div>
                </div>
                <PiPaperPlaneTiltFill size={35} className={styles.sendButton} />
            </div>
        </>
    )
}

export default ChatBox