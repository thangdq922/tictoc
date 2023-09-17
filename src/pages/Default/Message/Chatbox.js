
import { Link } from 'react-router-dom'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'
import { BsEmojiLaughing } from 'react-icons/bs'

import Image from '../../../component/Image'
import styles from './Message.module.css'

function ChatBox() {

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatHeader}>
                <Link className={styles.headerWrapper}>
                    <Image
                        className={styles.avatar}
                    />
                    <div style={{ marginLeft: 12 }}>
                        <p style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.5 }}>jakiedi229</p>
                        <p style={{ lineHeight: 1 }}>@jakiedi229</p>
                    </div>
                </Link>
            </div>
            <div className={styles.chatMain}>
                <div className={styles.chatCotent}>
                    <div className={styles.timeContainer}>
                        <span>7:34 PM</span>
                    </div>
                    <div className={styles.chatItem}>
                        <div className={styles.messageContainer}>
                            <Link>
                                <Image className={styles.avatar} />
                            </Link>
                            <div className={styles.textContainer}
                                style={{
                                    background: 'rgba(22, 24, 35, 0.06)',
                                    marginRight: 8,
                                    marginLeft: 0,
                                }}>
                                <p className={styles.text}>aa</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chatItem}>
                        <div className={styles.messageContainerReply}>
                            <Link>
                                <Image className={styles.avatar} />
                            </Link>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>aa</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chatItem}>
                        <div className={styles.messageContainerReply}>
                            <Link>
                                <Image className={styles.avatar} />
                            </Link>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>aa</p>
                            </div>
                        </div>
                    </div>
                </div>

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
        </div >
    )
}

export default ChatBox