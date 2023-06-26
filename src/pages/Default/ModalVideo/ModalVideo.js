import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./ModalVideo.module.css";
import images from "../../../assets/image/";
import Image from "../../../component/Image";
import VideoDetail from "../../Common/Videos/VideoDetail";
import CustomModal from "./CustomModal";
import { redirectModal } from "./CustomModal";

function ModalVideo() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('cc')

  return (
    <CustomModal fullScreen>
      <VideoDetail data={location.state?.video} />
      <div
        className={styles.close_button}
        onClick={() => redirectModal(location, navigate)}
      >
        <IoClose />
      </div>
      <div
        className={styles.home_button}
        onClick={() => redirectModal(location, navigate)}
      >
        <Image className ={styles.cc} src={images.logoModal} />
      </div>
    </CustomModal>
  );
}

export default memo(ModalVideo);
