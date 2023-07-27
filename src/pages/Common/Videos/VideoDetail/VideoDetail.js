import React, { memo } from "react";

import styles from "./VideoDetail.module.css";
import ListComment from "../../Comments";
import Video from "./Video";

function VideoDetail({ data : video}) {

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

export default memo(VideoDetail);
