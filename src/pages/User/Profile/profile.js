import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiUserCheck, BiSolidCheckCircle } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { FiPlay } from "react-icons/fi";
import { BiSolidLockAlt } from "react-icons/bi"
import Tippy from "@tippyjs/react";

import styles from "./Profile.module.css";
import Image from "../../../component/Image";
import Button from "../../../component/Button";
import Loader from "../../../component/Loader";
import WrapperAuth from "./../../../component/WrapperAuth";
import handleFollowFunc from "../../../services/user/followService";
import * as usersService from "../../../services/user/usersService";
import config from "../../../config";
import { getUser } from "../../../hooks/auth/user.localstore";
import useModal from "../../../hooks/useModal";
import EditProfile from "./EditProfile/EditProfile";

function Profile() {
    const [user, setUser] = useState({});
    const params = useParams();
    const { isOpen, toggle } = useModal()

    const userCurrent = getUser()?.data
    const userName = params.userName;

    const data = useQuery({
        queryKey: ['userProfile', userName],
        queryFn: async () => {
            const response = await usersService.user(userName)
            setUser(response)
            return user
        }
    })

    const handleVideoPlay = (e) => {
        e.target.play();
    };

    const handleVideoPause = (e) => {
        e.target.pause();
        e.target.currentTime = 0;
    };

    const handleFollow = async () => {
         if (!userCurrent) {
            return;
        }
        const isFollowed = await handleFollowFunc(user);
        setUser((user) => ({ ...user, followed: isFollowed }));
    };

    if (data.isLoading) {
        return <Loader />;
    }

    return (
        <>
            {userCurrent && <EditProfile open={isOpen} close={toggle} />}
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <Image
                            src={user.avatar}
                            width={116}
                            height={116}
                            className={styles.avatar}
                        />
                        <div className={styles.title_container}>
                            <h2 className={styles.user_title}>
                                {user.userName}
                                {user.tick && <BiSolidCheckCircle className={styles.verify} />}
                            </h2>
                            <h4 className={styles.user_fullname}>{user.name}</h4>
                            {userCurrent?.id !== user?.id ? (
                                <WrapperAuth>
                                    <div className={styles.button_container}>
                                        {user.followed ? (
                                            <div className={styles.followed_container}>
                                                <Button className={styles.button} outline large>
                                                    Messenges
                                                </Button>
                                                <Tippy content="Unfollow" placement="bottom">
                                                    <div className={styles.unfollow} onClick={handleFollow}>
                                                        <BiUserCheck />
                                                    </div>
                                                </Tippy>
                                            </div>
                                        ) : (
                                            <Button
                                                large
                                                className={styles.button_follow}
                                                onClick={handleFollow}
                                            >
                                                Follow
                                            </Button>
                                        )}
                                    </div>
                                </WrapperAuth>
                            ) : (
                                <div className={styles.button_container}>
                                    <Button text leftIcon={<FaRegEdit />} onClick={toggle}>
                                        Edit profile
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <h2 className={styles.count_info}>
                        <div className={styles.number_container}>
                            <strong>{user.followingsCount}</strong>
                            <span className={styles.span}> Followings</span>
                        </div>
                        <div className={styles.number_container}>
                            {user.followersCount}
                            <span className={styles.span}> Follower</span>
                        </div>
                        <div className={styles.number_container}>
                            <strong>{user.likesCount}</strong>
                            <span className={styles.span}>Likes</span>
                        </div>
                    </h2>
                    <h2 className={styles.bio}>{user.bio || "No bio yet."}</h2>
                </div>
                <div className={styles.list_video_wrapper}>
                    <div className={styles.title_wrapper}>
                        <p className={styles.title}>
                            <span>Videos</span>
                        </p>
                        <p className={styles.title}>
                            <BiSolidLockAlt size={20} />
                            <span style={{ marginLeft: 6 }}>Liked</span>
                        </p>
                    </div>
                    <div className={styles.list_video_container}>
                        <div className={styles.list_video}>
                            {user?.videos?.map((video) => (
                                <Link
                                    key={video.id}
                                    to={config.videoLink(video)}
                                    state={{
                                        videoDetail: true,
                                        video: video,
                                        prevPath: window.location.pathname,
                                        openModel: true,
                                    }}
                                    className={styles.link}
                                >
                                    <div className={styles.video_container}>
                                        <video
                                            className={styles.video}
                                            src={video.fileUrl}
                                            muted
                                            loop
                                            onMouseEnter={handleVideoPlay}
                                            onMouseLeave={handleVideoPause}
                                            poster={video.thumb_url}
                                        />
                                        <div className={styles.video_desc}>
                                            <p>{video.caption}</p>
                                        </div>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <FiPlay style={{ verticalAlign: 'middle', marginRight: 4, color: 'white' }} />
                                        <strong className={styles.viewCount}>{video.viewsCount}</strong>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
