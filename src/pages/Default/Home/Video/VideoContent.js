import { useEffect, useRef, useState } from "react";
import { CommentIcon, HeartIcon, ShareIcon } from "../../../../component/Icons/Icons";
import { useElementOnScreen } from "../../../../hooks";
import styles from './Video.module.css'


function VideoContent({videoUrl, like, cmt, share }) {
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
    }, [isVisibile]);

    return (
        <div className="flex flex-row">
            <video
                ref={videoRef}
                onClick={handleVideo}
                className="w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4"
                src={videoUrl}
                muted="muted"
                autoPlay= {true}
                loop
            />
            <div className="flex flex-col justify-end ml-7">
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <HeartIcon className="text-xl" />
                    </div>
                    <span>{like}</span>
                </div>
                <div className="text-center mb-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <CommentIcon className="text-xl text-center" />
                    </div>
                    <span>{cmt}</span>
                </div>
                <div className="text-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
                        <ShareIcon className="text-xl text-center" />
                    </div>
                    <span>{share}</span>
                </div>
            </div>
        </div>
    );
}

export default VideoContent