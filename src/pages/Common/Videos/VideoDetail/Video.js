import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../../../hooks";
import * as videoService from '../../../../services/video/videoService'

import styles from './VideoDetail.module.css'

function Video({ data }) {

    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const videoTime = videoRef.current?.duration || 0;

    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleVideoEnded = () => {
        videoRef.current.play()
        videoService.setView(data.id)
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

    return (
        <video
            ref={videoRef}
            onClick={handleVideo}
            className={videoTime < 10 ? `${styles['video_short']}  ${styles.video}` : `${styles.video}`}
            src={data.fileUrl}
            poster={data.thumbUrl || ""}
            controls
            muted
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
            playsInline
            disablePictureInPicture
            onEnded={handleVideoEnded}
            
        />
    )


}

export default Video