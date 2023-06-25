import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../../../hooks";

import styles from './VideoDetail.module.css'

function Video({data}) {

    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);

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

    return (
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
    )


}

export default Video