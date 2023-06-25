import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { CommentIcon, HeartIcon, ShareIcon } from "../../../component/Icons";
import { useElementOnScreen } from "../../../hooks";
import styles from './Video.module.css'
// import handleFollowFunc from "../../../../services/user/followService";
import handleLikeFunc from "../../../services/video/likeService";


function VideoContent({ data }) {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);

    const [dataChange, setDataChange] = useState(data);
    const [user, setUser] = useState(dataChange.user);

    // handle video
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
        // eslint-disable-next-line
    }, [isVisibile]);

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
                    to={`/@${user.nickname}/video/${data.id}`}
                    state={{
                        videoDetail: true,
                        video: dataChange,
                        // prevPath: location.pathname,
                    }}
                >
                    <div className={styles['wrapper-video']}>
                        <video
                            ref={videoRef}
                            onClick={handleVideo}
                            className={styles.video}
                            src={data.file_url}
                            poster={data.thumb_url || ""}
                            controls
                            muted
                            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
                            playsInline
                            disablePictureInPicture
                            loop
                        />
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
                    to={`/@${user.nickname}/video/${data.id}`}
                    state={{
                        videoDetail: true,
                        video: dataChange,
                        // prevPath: location.pathname,
                    }}
                >
                    <button className={styles['action-btn']}>
                        <span className={styles['icon-btn']}>
                            < CommentIcon /></span>
                        <b>{data.comments_count}</b>
                    </button>
                </Link>

                <button className={styles['action-btn']}>
                    <span className={styles['icon-btn']}>
                        <ShareIcon /></span>
                    <b>{data.shares_count}</b>
                </button>

            </div>
        </div>
    );
}

export default VideoContent