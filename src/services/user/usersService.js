import { authApi } from "../../config";
import { getUser, removeUser } from "../../hooks/auth/user.localstore";
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
    return res.data;
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
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + getUser()?.meta.token,
      }
    })
    return res.data;
  } catch (err) {
    console.log(err);
    return []
  }
};

export const user = async (userName) => {
  try {
    const res = await httpRequest({
      method: 'get',
      url: `users/@${userName}`,
    })
    return res.data;
  } catch (err) {
    console.log(err);
    return []
  }
};

export async function userRegister({ email, password, type }) {
  try {
    const res = await httpRequest({
      method: 'post',
      url: authApi.register,
      data: {
        email,
        password,
        type
      },
    })
    return res.data
  } catch (err) {
    throw new Error(err.response.data.message)
  }
};

export async function userLogin({ email, password }) {
  try {
    const res = await httpRequest({
      method: 'post',
      url: authApi.login,
      data: {
        email,
        password
      },
    })
    return res.data
  } catch (err) {
    throw new Error(err.response.data.message)
  }
};

export async function userlogout() {
  await httpRequest({
    method: 'post',
    url: authApi.logout,

  })
  removeUser()
};

export async function userEdit({ formData }) {
  try {
    const res = await httpRequest({
      method: 'patch',
      url: authApi.me,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    return res.data
  } catch (err) {
    throw new Error(err.response.data.message)
  }
};

export async function deleteUser(id) {
  try {
    await httpRequest({
      method: 'delete',
      url: `users`,
      params: [id]
    })
  } catch (err) {
    console.log(err);
  }
};

