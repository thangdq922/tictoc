import { Link, useNavigate } from "react-router-dom"
import Tippy, { useSingleton } from "@tippyjs/react/headless"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useContext, useState } from "react"

import { MusicIcon } from "../../../../component/Icons"
import Image from '../../../../component/Image'
import styles from './Video.module.css'
import Button from '../../../../component/Button'
import { Wrapper as PopperWrapper } from '../../../../component/Popper';
import AccountPreview from "../../../../component/Account/AccountPreview"
import config from "../../../../config"
import handleFollowFunc from "../../../../services/user/followService";
import WrapperAuth from "../../../../component/WrapperAuth"
import { getUser } from "../../../../hooks/auth/user.localstore"
import Menu from "../../../../component/Popper/Menu/Menu"
import * as videosService from '../../../../services/video/videoService'
import { StompContext } from '../../../../utils/StompClientProvider'
import EditVideo from "./EditVideo"
import useModal from "../../../../hooks/useModal"


function VideoInfo({ id, user, caption, music }) {
  const [source, target] = useSingleton({ overrides: ['offset'] });
  const [userChange, setUserChange] = useState(user);
  const [capt, setcapt] = useState(caption);

  const client = useContext(StompContext);
  const navigate = useNavigate();
  const { isOpen, toggle } = useModal()
  const userCurrent = getUser()?.data

  const videoSetting = [
    { title: "Video Settings", settingV: true },
    { title: "Delete", settingV: true, separate: true }
  ]

  const editCapt = (data) => setcapt(data)

  const handleFollow = async () => {
    if (!userCurrent) {
      return;
    }
    const isFollowed = await handleFollowFunc(userChange);
    setUserChange((user) => ({ ...user, followed: isFollowed }));
    client.stompClient.send('/app/notification', {}, userChange.userName)
  };

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={userChange} />
        </PopperWrapper>
      </div>
    );
  };

  // Delete a video
  const handleMenuChange = (menuItem) => {
    menuItem.title === 'Video Settings' && toggle()
    menuItem.title === 'Delete' && deleteVideo()
  }
  const deleteVideo = async () => {
    if (userCurrent.id === userChange.id || userCurrent?.id === 1) {
      await videosService.deleteVideo(id);
      const userProfile = config.profileLink(userCurrent.userName);
      navigate(userProfile);
    }
  };

  return (
    <>
      {(userCurrent && isOpen) && <EditVideo open={isOpen} close={toggle} caption={capt} id={id} edit={editCapt} />}
      <div className={styles['video-info']}>
        <Link to={config.profileLink(userChange.userName)} className={styles['author-name']} >
          <Tippy singleton={target} offset={[130, 3]}>
            <Image className={styles.avatar} src={userChange.avatar} alt="avt" />
          </Tippy>
        </Link>

        <div className={styles['video-info-content']}>
          <div className={styles['author-name']} >
            <Tippy singleton={target} offset={[30, 30]}>
              <Link to={config.profileLink(userChange.userName)}  >
                <span className={styles.name}>{userChange.userName}</span>
                {userChange.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                <span className={styles.userName}>{userChange.name}</span>
              </Link>
            </Tippy>
          </div>

          {capt.split(" ").map((cap, index) =>
            <span key={index}>
              {cap.charAt(0) !== '#' ?
                <span>{cap}</span>
                : <Link style={{ color: '#2b5db9', marginBottom: 0 }} className={styles.music}>{cap}</Link>
              }
              &nbsp;
            </span>
          )}

          <div className={styles.music}>
            <MusicIcon />
            <Link>{music || `Nhạc nền - ${userChange.userName}`}</Link>
          </div>
        </div>
        <Tippy interactive delay={[800, 200]} placement="bottom" render={renderPreview} singleton={source} />

        {(userCurrent?.id === userChange.id || userCurrent?.id === 1) ?
          <Menu items={videoSetting} onChange={handleMenuChange} offset={[10, -70]} >
            <div style={{ marginTop: 10 }} >
              <HiOutlineDotsHorizontal size={24} style={{ cursor: 'pointer' }} />
            </div>
          </Menu>
          : <div onClick={handleFollow} style={{ cursor: 'pointer' }}>
            {userChange.followed ? (
              <Button text small className={styles['follow-btn']}>
                Following
              </Button>
            ) : (
              <WrapperAuth>
                <Button outline small className={styles['follow-btn']} >
                  Follow
                </Button>
              </WrapperAuth>
            )}
          </div>
        }

      </div>
    </>
  )
}

export default VideoInfo