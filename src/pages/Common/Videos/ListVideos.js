import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


import VideoContent from "./VideoContent"
import VideoInfo from "./VideoInfo"
import styles from './Video.module.css'
import * as videosService from '../../../services/video/videoService'
import Loader from "../../../component/Loader/Loader";

function ListVideos({ type }) {

    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        async function getListVideo() {
            const result = await videosService.getListVideo(type);
            console.log(result)
            setVideos(result)
        }

        getListVideo()
    }, [type]);

    const fetchListVideo = async () => {
        const result = await videosService.getListVideo(type, page);
        return result;
    };

    const fetchData = async () => {
        const listVideoNext = await fetchListVideo();

        setVideos([...videos, ...listVideoNext]);
        if (listVideoNext.length === 0) {
            setHasMore(false);
        }
        setPage((prev) => prev + 1);
    };


    return (

        <>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<h4>Yay! You have seen it all</h4>}
                style={{ overflow: "inherit" }}
            >
                {videos.map((video, index) =>
                    <div className={styles.wrapper} key={index}>
                        <VideoInfo {...video} />
                        <VideoContent data={video} />
                    </div>
                )}
            </InfiniteScroll>
        </>
    )
}

export default ListVideos