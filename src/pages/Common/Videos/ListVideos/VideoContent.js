import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CommentIcon, HeartIcon, ShareIcon } from "../../../../component/Icons";
import styles from './Video.module.css'
import handleLikeFunc from "../../../../services/video/likeService";
import Video from "../VideoDetail/Video";
import Menu from "../../../../component/Popper/Menu/Menu";
import { MENU_ITEMS_SHARE } from "../../../../component/DataMenu/dataMenu";
import config from "../../../../config";
import WrapperAuth from "../../../../component/WrapperAuth";
import { getUser } from "../../../../hooks/auth/user.localstore";


function VideoContent({ data }) {

    const [dataChange, setDataChange] = useState(data);
    const userCurrent = getUser()?.data
    // handle actions
    useEffect(() => {
        setDataChange(dataChange);
    }, [dataChange]);

    const handleLike = async () => {
        if (!userCurrent) {
            return;
        }
        const newdataChange = await handleLikeFunc(dataChange);
        setDataChange((dataChange) => ({
            ...dataChange,
            ...newdataChange,
        }));
    };

    const toLogin = (e) => {
        if (!userCurrent) {
            e.preventDefault()
        }
    }

    const copy = async () => {
        await navigator.clipboard.writeText(window.location + `@${dataChange.user.userName}/video/${dataChange.id}`);
        alert('Link Copied');
    }

    const handleMenuChange = (menuItem) => {
        switch (menuItem.title) {
            case 'Copy link':
                copy()
                break;
            default:
        }
    }

    return (
        <div className={styles['video-content']}>
            <div className={styles['video-container']}>
                <Link
                    to={config.videoLink(dataChange)}
                    state={{
                        videoDetail: true,
                        video: dataChange,
                        prevPath: window.location.pathname,
                        openModel: true,
                    }}
                >
                    <div className={styles['wrapper-video']}>
                        <Video className={styles.video} data={dataChange} />
                    </div>
                </Link>
            </div>

            <div className={styles.action} >
                <WrapperAuth>
                    <button className={styles['action-btn']} onClick={() => handleLike(dataChange)} >
                        <span className={styles['icon-btn']}>
                            {<HeartIcon className={dataChange.liked ? styles.liked : ''} />}   </span>
                        <b>{dataChange.likesCount}</b>
                    </button>

                    <Link
                        to={config.videoLink(dataChange)}
                        state={{
                            videoDetail: true,
                            video: dataChange,
                            prevPath: window.location.pathname,
                            openModel: true,
                        }}
                        onClick={toLogin}
                    >
                        <button className={styles['action-btn']}>
                            <span className={styles['icon-btn']}>
                                < CommentIcon /></span>
                            <b>{dataChange.commentsCount}</b>
                        </button>
                    </Link>

                    <Menu items={MENU_ITEMS_SHARE} offset={[150, 0]} onChange={handleMenuChange} >
                        <button className={styles['action-btn']} onClick={toLogin}>
                            <span className={styles['icon-btn']}>
                                <ShareIcon /></span>
                            <b>{dataChange.sharesCount}0</b>
                        </button>
                    </Menu>
                </WrapperAuth>
            </div>
        </div>
    );
}

export default VideoContent