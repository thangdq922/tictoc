import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CommentIcon, HeartIcon, ShareIcon } from "../../../component/Icons";
import styles from './Video.module.css'
// import handleFollowFunc from "../../../../services/user/followService";
import handleLikeFunc from "../../../services/video/likeService";
import Video from "./VideoDetail/Video";
import Menu from "../../../component/Popper/Menu/Menu";
import { MENU_ITEMS_SHARE } from "../../../component/DataMenu/dataMenu";
import config from "../../../config";


function VideoContent({ data }) {

    const [dataChange, setDataChange] = useState(data);
    const [user, setUser] = useState(dataChange.user);

    // handle actions
    useEffect(() => {
        setUser(dataChange.user);
        setDataChange(dataChange);
    }, [dataChange]);

    // const handleFollow = async () => {
    //     const isFollowed = await handleFollowFunc(user);
    //     setUser((user) => ({ ...user, is_followed: isFollowed }));
    // };

    const handleLike = async () => {
        const newdataChange = await handleLikeFunc(dataChange);
        setDataChange((dataChange) => ({
            ...dataChange,
            ...newdataChange,
        }));
    };


    return (
        <div className={styles['video-content']}>
            <div className={styles['video-container']}>
                <Link
                    to={config.routesPublic.videoLink(data)}
                    state={{
                        videoDetail: true,
                        video: dataChange,
                        prevPath: window.location.pathname,
                    }}
                >
                    <div className={styles['wrapper-video']}>
                        <Video className={styles.video} data={dataChange} />
                    </div>
                </Link>
            </div>
            <div className={styles.action} onClick={() => handleLike(dataChange)}>
                <button className={styles['action-btn']} >
                    <span className={styles['icon-btn']}>
                        {<HeartIcon className={dataChange.is_liked ? styles.liked : ''} />}   </span>
                    <b>{data.likes_count}</b>
                </button>

                <Link
                    to={config.routesPublic.videoLink(data)}
                    state={{
                        videoDetail: true,
                        video: dataChange,
                        prevPath: window.location.pathname,
                    }}
                >
                    <button className={styles['action-btn']}>
                        <span className={styles['icon-btn']}>
                            < CommentIcon /></span>
                        <b>{data.comments_count}</b>
                    </button>
                </Link>

                <Menu items={MENU_ITEMS_SHARE} offset={[150, 0]} >
                    <button className={styles['action-btn']}>
                        <span className={styles['icon-btn']}>
                            <ShareIcon /></span>
                        <b>{data.shares_count}</b>
                    </button>
                </Menu>

            </div>
        </div>
    );
}

export default VideoContent