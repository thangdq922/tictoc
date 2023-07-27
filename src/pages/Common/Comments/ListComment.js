import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";


import * as commentService from "../../../services/comment/commentService";
import Button from "../../../component/Button";
import Image from "../../../component/Image";
import Loader from "../../../component/Loader";
import styles from "./ListComment.module.css";
import config from "../../../config";
import WrapperAuth from "../../../component/WrapperAuth";
import VideoInfo from "../Videos/ListVideos/VideoInfo";
import { CommentIcon, HeartIcon, ShareIcon } from "../../../component/Icons";
import Menu from "../../../component/Popper/Menu/Menu";
import { useQuery } from "@tanstack/react-query";
import handleLikeFunc from "../../../services/video/likeService";
import { MENU_ITEMS_SHARE } from "../../../component/DataMenu/dataMenu";
import { getUser } from "../../../hooks/auth/user.localstore";

function ListComment({ video }) {
  const [listComment, setListComment] = useState({});
  const [dataChange, setDataChange] = useState(video);
  const [comment, setComment] = useState("");
  const userCurent = getUser()?.data

  const data = useQuery({
    queryKey: ['listComment', dataChange],
    queryFn: async () => {
      const result = await commentService.getListComment(dataChange.id);
      setListComment(result);
      if (!result) {
        throw new Error('Network response was not ok')
      }
      return listComment

    }
  })

  const handleComment = async () => {
    const result = await commentService.postComment(dataChange.id, {
      comment: comment,
    });
    setComment("");
    setDataChange((prev) => [result, ...prev]);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleComment();
  };


  const toLogin = (e) => {
    if (!userCurent) {
      e.preventDefault()
    }
  }

  const handleLike = async () => {
    if (!userCurent) {
      return;
    }
    const newdataChange = await handleLikeFunc(dataChange);
    setDataChange((dataChange) => ({
      ...dataChange,
      ...newdataChange,
    }));
  };

  return (
    <div className={styles.content_container}>
      <div className={styles.info}>
        <VideoInfo {...video} />
      </div>

      <WrapperAuth>
        <div className={styles.action} >
          <button className={styles['action-btn']} onClick={() => handleLike(dataChange)} >
            <span className={styles['icon-btn']}>
              {<HeartIcon className={dataChange.isLiked ? styles.liked : ''} />}   </span>
            <b>{dataChange.likesCount}</b>
          </button>

          <Link
            to={config.videoLink(dataChange)}
            state={{
              videoDetail: true,
              video: dataChange,
              prevPath: window.location.pathname,
              openModel: true,
            }}
            onClick={toLogin}
          >
            <button className={styles['action-btn']}>
              <span className={styles['icon-btn']}>
                < CommentIcon /></span>
              <b>{dataChange.commentsCount}</b>
            </button>
          </Link>

          <Menu items={MENU_ITEMS_SHARE} offset={[150, 0]} >
            <button className={styles['action-btn']} onClick={toLogin}>
              <span className={styles['icon-btn']}>
                <ShareIcon /></span>
              <b>{dataChange.sharesCount}</b>
            </button>
          </Menu>
        </div>
      </WrapperAuth>
      <div className={styles.linkCopy}>
        <p className={styles.link}>{window.location.href}</p>
        <button className={styles.button}>Copy Link</button>
      </div>

      <div className={styles.comment_list_container}>
        {!data.isLoading ? (
          listComment ? (
            listComment?.length > 0 ? (
              listComment?.map((comment) => (
                <div className={styles.comment_item_container} key={comment.id}>
                  <div className={styles.comment_content_container}>
                    <Link
                      to={config.profileLink(comment.user.userName)}
                      className={styles.account_item}
                    >
                      <Image src={comment.user.avatar} className={styles.img} />
                    </Link>
                    <div className={styles.comment_container}>
                      <Link
                        to={config.profileLink(comment.user.userName)}
                        className={styles.account_item}
                      >
                        <p className={styles.comment_user}>
                          {comment.user.name}
                        </p>
                      </Link>

                      <p className={styles.comment_text}>{comment.comment}cc</p>
                      <p className={styles.created_at}>{comment.created_at}cc</p>
                    </div>
                    <div className={styles.action_container}>
                      <div className={styles.like_wrapper}>
                        <div
                          className={
                            comment.isLiked
                              ? `${styles.icon} ${styles.liked}`
                              : `${styles.icon}`
                          }
                        >
                          <FaRegHeart />
                        </div>
                        <span>{comment.likesCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noti_text}>No comment</p>
            )
          ) : (
            <p className={styles.noti_text}>Please login to see and comment</p>
          )
        ) : (
          <Loader />
        )}
      </div>
      <WrapperAuth>
        <form onSubmit={onFormSubmit}>
          <div className={styles.bottom_comment_container}>
            <input
              className={styles.input}
              type="text"
              placeholder="Add comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button type="submit" primary className={styles.button}>
              Post
            </Button>
          </div>
        </form>
      </WrapperAuth>

    </div>
  );
}

export default ListComment;
