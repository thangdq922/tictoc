import httpRequest from "../../utils/httpRequest";

export const suggestedList = async (page = 1, perpage = 5) => {
  try {
    const res = await httpRequest({
      method: 'get',
      url: 'users/suggested',
      params: {
        page,
        per_page: perpage,
      }
    })
    return res.data.data;
  } catch (err) {
    console.log(err);
    return []
  }
};

export const followingList = async (page = 1) => {
  try {
    const res = await httpRequest({
      method: 'get',
      url: 'me/followings',
      params: {
        page,
      }
    })
    return res.data.data;
  } catch (err) {
    console.log(err);
    return []
  }
};

export const user = async (nickname) => {
  try {
    const res = await httpRequest({
      method: 'get',
      url: `users/@${nickname}`,
    })
    return res.data.data;
  } catch (err) {
    console.log(err);
    return []
  }
};

