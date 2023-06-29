import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import config from '../../../config';
import styles from '../Home/Home.module.css'
import * as usersService from "../../../services/user/usersService";
import Loader from '../../../component/Loader';
import handleFollowFunc from '../../../services/user/followService';


function Following() {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const nickname = '@tranhuutoan';

    useEffect(() => {
        const fetchApi = async () => {
            const result = await usersService.user(nickname);
            setUser(result);
            setLoading(false);
        };

        fetchApi();
    }, [nickname /*userRedux*/, user.is_followed]);

    const handleFollow = async () => {
        const isFollowed = await handleFollowFunc(user);
        setUser((user) => ({ ...user, is_followed: isFollowed }));
    };

    const handleVideoPlay = (e) => {
        e.target.play();
    };

    const handleVideoPause = (e) => {
        e.target.pause();
        e.target.currentTime = 0;
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.wrapper} >
            <div className={styles['list-video-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <p className={styles.title}>Videos</p>
                    <p className={styles.title}>Liked</p>
                </div>
                <div className={styles['list-video-container']}>
                    <div className={styles['list-video']}>
                        {user?.videos?.map((video) => (
                            <Link
                                key={video.id}
                                to={config.routesPublic.videoLink(video)}
                                state={{
                                    videoDetail: true,
                                    video: video,
                                    prevPath: window.location.pathname,
                                }}
                            >
                                <div className={styles['video-container']}>
                                    <video
                                        className={styles.video}
                                        src={video.file_url}
                                        muted
                                        loop
                                        onMouseEnter={handleVideoPlay}
                                        onMouseLeave={handleVideoPause}
                                        poster={video.thumb_url}
                                    />
                                    <div className={styles['video-desc']}>
                                        <p>{video.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Following