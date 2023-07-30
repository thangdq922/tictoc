import httpRequest from "../../utils/httpRequest";

export const getListComment = async (id) => {
  try {
    const res = await httpRequest.get(`videos/${id}/comments`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (id, comment) => {
  try {
    const res = await httpRequest({
      method: 'post',
      url: `videos/${id}/comments`,
      data: { comment },
    })
    return res.data
  } catch (err) {
    console.log(err);
  }
}

export const deleteComment = async (id, cmtId) => {
  try {
    const res = await httpRequest({
      method: 'delete',
      url: `videos/${id}/comments/${cmtId}`,
    })
    return res.data
  } catch (err) {
    console.log(err);
  }
}

