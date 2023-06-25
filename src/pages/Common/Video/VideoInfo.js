import { Link } from "react-router-dom"
import Tippy, { useSingleton } from "@tippyjs/react/headless"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"


import { MusicIcon } from "../../../component/Icons"
import Image from '../../../component/Image'
import styles from './Video.module.css'
import Button from '../../../component/Button'
import { Wrapper as PopperWrapper } from '../../../component/Popper';
import AccountPreview from "../../../component/Account/AccountPreview"


function VideoInfo({ user, description, music }) {
  const [source, target] = useSingleton({overrides: ['offset']});

  user.tick = true

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={user} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div className={styles['video-info']}>
      <Link to={`/@${user.nickname}`} className={styles['author-name']} >
        <Tippy singleton={target} offset={[130,3]}>
          <Image className={styles.avatar} src={user.avatar} alt="avt"  />
        </Tippy>
      </Link>

      <div className={styles['video-info-content']}>
        <Tippy singleton={target} offset={[-178,30]}>
          <Link to={`/@${user.nickname}`} className={styles['author-name']} >
            <span className={styles.name}>{user.nickname}</span>
            {user.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
            <span className={styles.nickname}>{user.last_name}</span>
          </Link>
        </Tippy>

        <div >{description}</div>
        <div className={styles.music}>
          <Link>#gà</Link>
          <p>
            <MusicIcon />
            <Link>{music || `Nhạc nền - ${user.nickname}`}</Link>
          </p>
        </div>
      </div>
      <Tippy interactive delay={[800, 200]} placement="bottom" render={renderPreview} singleton={source} />
      <Button outline small className={styles['follow-btn']}>
        Follow
      </Button>
    </div>
  )
}

export default VideoInfo