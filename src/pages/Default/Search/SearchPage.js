import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FaCircleCheck } from 'react-icons/fa6'
import { FiPlay } from 'react-icons/fi'

import config from '../../../config';
import styles from './SearchPage.module.css'
import Loader from '../../../component/Loader';
import * as searchService from '../../../services/searchService';
import Image from '../../../component/Image/Image';
import { MusicIcon, SearchErrorIcon } from '../../../component/Icons';


function SearchPage() {


    const [searchParams] = useSearchParams();
    const location = useLocation()

    const switchs = location.pathname
    const query = searchParams.get('q')

    const { isLoading, data: users } = useQuery({
        queryKey: ['userSearch', query],
        queryFn: () => searchService.searchUser(query, 'more'),
    })

    const { data: videos } = useQuery({
        queryKey: ['videoSearch', query],
        queryFn: async () => await searchService.searchVideo(query, 'more'),
    })


    const handleVideoPlay = (e) => {
        e.target.play();
    };

    const handleVideoPause = (e) => {
        e.target.pause();
        e.target.currentTime = 0;
    };

    if (isLoading) {
        return <Loader />;
    }

    if (query === null || query === '') {
        return (
            <div className={styles.error}>
                <SearchErrorIcon />
                <h2 className={styles.title} >Không tìm thấy kết quả dành cho ""</h2>
                <p >Kiểm tra chính tả hoặc thử một tìm kiếm khác.</p>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles['list-container']}>

                <div className={styles.searchTab}>
                    <div className={styles.listTab}>
                        <NavLink
                            to={config.searchLink(query, 'video')}
                            className={({ isActive }) => [styles.tabItem, isActive && styles.active].join(' ')}>
                            <span>Video</span>
                        </NavLink>
                        <NavLink
                            to={config.searchLink(query, 'user')}
                            className={({ isActive }) => [styles.tabItem, isActive && styles.active].join(' ')}>
                            <span>Account </span>
                        </NavLink>
                    </div>
                </div>

                {switchs === '/search/video' ?
                    videos?.map((video) => (
                        <div className={styles['video-container']} key={video.id}>
                            <Link
                                className={styles.link}
                                to={config.videoLink(video)}
                                state={{
                                    videoDetail: true,
                                    video: video,
                                    prevPath: location.pathname + location.search,
                                    openModel: true,
                                }}
                            >
                                <div className={styles['video-wrapper']}>
                                    <video
                                        className={styles.video}
                                        src={video.fileUrl}
                                        muted
                                        loop
                                        onMouseEnter={handleVideoPlay}
                                        onMouseLeave={handleVideoPause}
                                        poster={video.thumbUrl}
                                    />
                                </div>
                            </Link>
                            <div className={styles['info-container']}>
                                <div className={styles['info-wrapper']}>
                                    <div className={styles['video-caption']}>
                                        <div className={styles.container}>
                                            <Link
                                                to={config.videoLink(video)}
                                                state={{
                                                    videoDetail: true,
                                                    video: video,
                                                    prevPath: location.pathname + location.search,
                                                    openModel: true,
                                                }}
                                            >

                                                <span style={{ fontWeight: 400 }}>{video.caption}</span>
                                            </Link>
                                            <p>
                                                <MusicIcon />
                                                <Link style={{ fontWeight: 600, color: 'rgb(15 88 223)' }}>
                                                    #{video.music || `Nhạc nền - ${video.user.userName}`}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.playLine}>
                                        <Link className={styles.userInfo} to={config.profileLink(video.user.userName)}>
                                            <span className={styles.avatarContainer}>
                                                <Image src={video.user.avatar} alt="userAva" className={styles.img} />
                                            </span>
                                            <p className={styles.userName}>{video.user.userName}</p>
                                            <FaCircleCheck
                                                style={{ marginLeft: 4, fontSize: 16, color: 'rgb(32, 213, 236)' }} />
                                        </Link>
                                        <div className={styles.viewCount}>
                                            <FiPlay style={{ verticalAlign: 'middle', marginRight: 4, color: 'black' }} />
                                            <strong>{video.viewsCount}</strong>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                    : users?.map((user) =>
                        <Link className={styles.account} to={config.profileLink(user.userName)} key={user.id}>
                            <div className={styles['avatar-container']}>
                                <Image src={user.avatar} className={styles.img} />
                            </div>
                            <div className={styles['account-info']}>
                                <p className={styles.userName}>{user.userName}</p>
                                <div className={styles.subtitle}>
                                    <p className={styles.name}>{user.name} </p>
                                    &bull;
                                    <strong className={styles['follow-count']}>
                                        {user.followersCount}
                                        <span style={{ fontWeight: 400 }}> Follower </span>
                                    </strong>
                                    <p className={styles['account-desc']} style={{ marginTop: 4 }}>
                                        {user.bio}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )}
            </div >
        </div >
    );
}

export default SearchPage