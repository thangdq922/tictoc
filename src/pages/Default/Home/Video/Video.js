import VideoContent from "./VideoContent"
import VideoInfo from "./VideoInfo"


function Video({data}) {
    return (
        <div>
            <VideoInfo {...data} />
            <VideoContent {...data} />
        </div>
    )
}

export default Video