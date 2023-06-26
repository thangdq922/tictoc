import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./VideoDetail.module.css";
import ListComment from "../../Comments";
import * as videosService from "../../../../services/video/videoService";
import Video from "./Video";
import Loader from "../../../../component/Loader/Loader";

function VideoDetail({ data }) {
  const [video, setVideo] = useState(data);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  if (!data) {
    // eslint-disable-next-line
    useEffect(() => {

      setLoading(true)
      const fetchApi = async () => {
        const result = await videosService.getVideo(params.id);
        setVideo(result);
        setLoading(false);
      };
      fetchApi();
    }, [params.id]);
    console.log(loading)

    if (loading) {
      return <Loader />;
    }
  }
  else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.video_container}>
          <img className={styles.blur} src={video.thumb_url} alt="" />
          <div className={styles.video_wrapper}>
            <div className={styles.wvideo}>
              <Video  data={video} />
            </div>
          </div>
        </div>
        <ListComment video={video} />
      </div>
    );
  }
}

export default memo(VideoDetail);
