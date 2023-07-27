import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './Following.module.css'
import * as usersService from "../../../services/user/usersService";
import Loader from '../../../component/Loader';
import ListVideos from '../../Common/Videos/ListVideos'
import { getUser } from '../../../hooks/auth/user.localstore';
import SuggestedVideo from '../../Common/Videos/SuggestedVideo';

function Following() {

    const [users, setUsers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const userCurrent = getUser()?.data

    const query = useQuery({
        queryKey: ['userRecommend'],
        queryFn: async () => {
            const data = await usersService.suggestedList(page, 20)
            setUsers(data)
            return users
        }
    })

    const fetchListVideo = async () => {
        const result = await usersService.suggestedList(page, 20);
        return result;
    };

    const fetchData = async () => {
        const listVideoNext = await fetchListVideo();

        setUsers([...users, ...listVideoNext]);
        if (listVideoNext.length === 0) {
            setHasMore(false);
        }
        setPage((prev) => prev + 1);
    };

    if (query.isLoading) {
        return <Loader />;
    }

    return (
        <div className={styles.wrapper}>
            {!userCurrent
                ? <InfiniteScroll
                    dataLength={users.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<Loader />}
                    endMessage={<h4>Yay! You have seen it all</h4>}
                    style={{ overflow: "inherit" }}
                >
                    <div className={styles['list-video-container']}>
                        {users?.map((user) => (
                            <SuggestedVideo key={user.id} user={user} />
                        ))}
                    </div >
                </InfiniteScroll>
                : <ListVideos type="following" />}
        </div >
    );
}






export default Following;