import React, { memo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import styles from "./ModalVideo.module.css";
import images from "../../../assets/image/";
import Image from "../../../component/Image";
import VideoDetail from "../../Common/Videos/VideoDetail";
import CustomModal from "../../../component/Modals";

function ModalVideo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(location.state?.openModel);
 
  if (!location.state?.video) {
    return <Navigate to="/error" replace />
  }
  
  return (
    <>
      <CustomModal type='fullScreen' isOpen={isOpen}>
        <VideoDetail data={location.state?.video} />
        <div
          className={styles.close_button}
          onClick={() => {
            setIsOpen(false)
            navigate(location.state.prevPath)
          }
          }
        >
          <IoClose />
        </div>
        <div
          className={styles.home_button}
          onClick={() => navigate('/')}
        >
          <Image className={styles.logo} src={images.logoModal} />
        </div>
      </CustomModal>
    </>
  );
}

export default memo(ModalVideo);
