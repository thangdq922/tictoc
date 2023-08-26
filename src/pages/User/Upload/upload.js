import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../../component/Button";
import Loader from "../../../component/Loader";
import { UploadIcon } from "../../../component/Icons";
import * as videosService from "../../../services/video/videoService";
import styles from "./Upload.module.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '../../../utils/firebase';
import { getUser } from "../../../hooks/auth/user.localstore";

function Upload() {
  const [filePreview, setFilePreview] = useState("");
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const userCurrent = getUser()?.data


  const navigate = useNavigate();

  const handleFile = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setFilePreview(src);
    setFile(e.target.files[0]);
  };

  const handleUploadVideo = async (data) => {
    setIsLoading(true);
    await videosService.postVideo(data);
    setIsLoading(false);
    navigate("/");
  };

  const submitForm = (data) => {

    const fileRef = ref(storage, `videos/${userCurrent.id}_${file.name}`)

    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleUploadVideo({ data, fileUrl: url });
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles['upload-wrapper']}>
      <div className={styles['upload-container']}>
        <span className={styles['upload-title']}>Upload video</span>
        <div className={styles['upload-sub-title']}>
          <span className={styles['span']}>Post a video to your account</span>
        </div>
        <div className={styles['upload-content']}>
          <div
            className={
              file ? `${styles['preview']}` : `${styles['upload-content-left']}`
            }
          >
            <label htmlFor="upload_file">
              <div className={styles['upload-state']}>
                {file ? (
                  <div className={styles['preview-v2']}>
                    <video
                      className={styles['video-preview']}
                      src={filePreview}
                      autoPlay
                      preload="auto"
                      playsInline=""
                      crossOrigin="anonymous"
                      loop
                      type="video/*"
                      controls
                    ></video>
                    <div className={styles['phone-preview']}></div>
                  </div>
                ) : (
                  <>
                    <UploadIcon />
                    <span className={styles['upload-state-title']}>
                      Select video to upload
                    </span>
                    <span className={styles['upload-state-sub-title']}>
                      Or drag and drop a file
                    </span>
                    <span className={styles['upload-state-notice']}>
                      MP4 or WebM
                    </span>
                    <span className={styles['upload-state-notice']}>
                      720x1280 resolution or higher
                    </span>
                    <span className={styles['upload-state-notice']}>
                      Up to 10 minutes
                    </span>
                    <span className={styles['upload-state-notice']}>
                      Less than 2 GB
                    </span>
                    <Button primary noAction className={styles['select-file']}>
                      <span className={styles['span']}> Select File</span>
                    </Button>
                  </>
                )}
              </div>
            </label>
            <input
              className={styles['input']}
              onChange={handleFile}
              name="upload_file"
              id="upload_file"
              required
              type="file"
              accept="video/*"
            />
          </div>
          <div className={styles['upload-content-right']}>
            <div className={styles['form-item']}>
              <div className={styles['form-header']}>
                <span className={styles['form-label']}>Caption</span>
                <span className={styles['form-count']}>
                  {caption.length} / 150
                </span>
              </div>
              <div className={styles['form-footer']}>
                <textarea
                  maxLength={150}
                  name="description"
                  id="description"
                  {...register("description")}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className={styles['form-textarea']}
                />
              </div>
            </div>
            <div className={styles['form-item']}>
              <div className={styles['form-header']}>
                <span className={styles['form-label']}>Cover</span>
              </div>
              <div className={styles['form-footer']}>
                <input
                  className={styles['form-input']}
                  name="thumbnail_time"
                  id="thumbnail_time"
                  {...register("thumbnail_time")}
                  type="number"
                  placeholder="Thumbnail capture position, units of seconds (Ex: 2)"
                  defaultValue={1}
                />
              </div>
            </div>
            <div className={styles['form-item']}>
              <div className={styles['form-header']}>
                <span className={styles['form-label']}>Music</span>
              </div>
              <div className={styles['form-footer']}>
                <input
                  className={styles['form-input']}
                  name="music"
                  id="music"
                  type="text"
                  placeholder="Music"
                  {...register("music")}
                />
              </div>
            </div>
            <div className={styles['form-item']}>
              <div className={styles['form-header']}>
                <span className={styles['form-label']}>
                  Who can watch this video
                </span>
              </div>
              <div className={styles['form-footer']}>
                <select
                  className={styles['form-select']}
                  name="viewable"
                  id="viewable"
                  {...register("viewable")}
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
            <div className={styles['form-item']}>
              <div className={styles['form-header']}>
                <span className={styles['form-label']}>Allow users to:</span>
              </div>
              <div className={styles['form-footer']}>
                <div className={styles['form-checkbox']}>
                  <input
                    className={styles['input']}
                    value="comment"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label className={styles['label']} htmlFor="">Comment</label>
                </div>
                <div className={styles['form-checkbox']}>
                  <input
                    value="duet"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label className={styles['label']} htmlFor="">Duet</label>
                </div>
                <div className={styles['form-checkbox']}>
                  <input
                    value="stitch"
                    type="checkbox"
                    name="allows"
                    id="allows"
                    defaultChecked
                    {...register("allows")}
                  />
                  <label className={styles['label']} htmlFor="">Stitch</label>
                </div>
              </div>
            </div>
            <div className={styles['button-container']}>
              <Button text className={`${styles['discard']} ${styles['button']}`}>
                Discard
              </Button>
              <Button
                primary
                disabled={!file || isLoading}
                className={`${styles['post']} ${styles['button']}`}
                type="submit"
                leftIcon={isLoading ? <Loader /> : null}
              >
                {!isLoading && "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Upload;
