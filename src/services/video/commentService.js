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
    const res = await httpRequest.post(`videos/${id}/comments`, comment);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
