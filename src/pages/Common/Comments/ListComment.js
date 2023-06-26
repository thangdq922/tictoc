import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
// import { useSelector } from "react-redux";


import * as commentService from "../../../services/video/commentService";
import { getFullName } from "../../../utils/common";
import Button from "../../../component/Button";
import Image from "../../../component/Image";
import Loader from "../../../component/Loader";
// import WrapperAuth from "../../../../components/WrapperAuth";
import styles from "./ListComment.module.css";
import config from "../../../config";
import * as videosService from "../../../services/video/videoService";

function ListComment({ video }) {
  const [listComment, setListComment] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const result = await commentService.getListComment(video.id);
      setListComment(result);
      setLoading(false);
    };
    fetchApi();
  }, [video]);

  const handleComment = async () => {
    const result = await commentService.postComment(video.id, {
      comment: comment,
    });
    setComment("");
    setListComment((prev) => [result, ...prev]);

    setLoading(false);
  };

  // Delete a video
  // const { user } = useSelector((state) => state.user);
  // const navigate = useNavigate();

  // const deleteVideo = async () => {
  //   if (user.id === video.user_id) {
  //     await videosService.deleteVideo(video.id);
  //     const userProfile = config.routes.profileLink(user.nickname);
  //     navigate(userProfile);
  //   }
  // };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleComment();
  };

  return (
    <div className={styles.content_container}>
      <Button type="submit" primary className={styles.button} >
        Delete Video
      </Button>
      <div className={styles.comment_list_container}>
        {!loading ? (
          listComment ? (
            listComment.length > 0 ? (
              listComment.map((comment) => (
                <div className={styles.comment_item_container} key={comment.id}>
                  <div className={styles.comment_content_container}>
                    <Image src={comment.user.avatar} className={styles.img} />
                    <div className={styles.comment_container}>
                      <Link
                        to={config.routesPublic.profileLink(comment.user.nickname)}
                        className={styles.account_item}
                      >
                        <p className={styles.comment_user}>
                          {getFullName(comment.user)}
                        </p>
                      </Link>

                      <p className={styles.comment_text}>{comment.comment}cc</p>
                      <p className={styles.created_at}>{comment.created_at}cc</p>
                    </div>
                    <div className={styles.action_container}>
                      <div className={styles.like_wrapper}>
                        <div
                          className={
                            comment.is_liked
                              ? `${styles.icon} ${styles.liked}`
                              : `${styles.icon}`
                          }
                        >
                          <FaRegHeart />
                        </div>
                        <span>{comment.likes_count}</span>
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
      {/* <WrapperAuth> */}
      <div>
        <form onSubmit={onFormSubmit}>
          <div className={styles.bottom_comment_container}>
            <input
              className={styles.input}
              type="text"
              placeholder="Add comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button type="submit" primary className={styles.submit}>
              Post
            </Button>
          </div>
        </form>
      </div>
      {/* </WrapperAuth> */}

    </div>
  );
}

export default ListComment;
