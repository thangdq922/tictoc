import { MusicIcon } from "../../../../component/Icons/Icons"
import Image from '../../../../component/Image'
import styles from './Video.module.css'


function VideoInfo({ thumbnailUrl, title }) {
    // console.log(thumbnailUrl)
    return(
    <div className={styles['video-info']}>
      <Image className={styles.avatar} src={thumbnailUrl} alt="avt" />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="#" className="text-xl font-bold hover:underline">
           ccc
          </a>
          <a href="#" className="text-xl">
            yyyy
          </a>
        </div>
        <div>{title}</div>
        <div className="flex flex-row items-center">
          <MusicIcon /> 
          <span className="ml-3">Am nhac dang phat</span>
        </div>
      </div>
      <div>
        <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">
          Follow
        </button>
      </div>
    </div>
)}

export default VideoInfo