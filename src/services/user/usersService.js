import { authApi } from "../../config";
import { removeUser } from "../../hooks/auth/user.localstore";
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

export const followingList = async (page = 1, perpage = 5) => {
  try {
    const res = await httpRequest({
      method: 'get',
      url: 'me/followings',
      params: {
        page,
        per_page: perpage,
      },
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

export async function userRegister({ birthDay, code, email, password, userName }) {
  try {
    const res = await httpRequest({
      method: 'post',
      url: authApi.register,
      data: {
        birthDay,
        code,
        email,
        password,
        userName
      },
    })
    return res.data
  } catch (err) {
    throw new Error(err.response.data.message)
  }
};

export async function userLogin({ usernameOrEmail, password }) {
  try {
    const res = await httpRequest({
      method: 'post',
      url: authApi.login,
      data: {
        usernameOrEmail,
        password
      },
    })
    return res.data
  } catch (err) {
    throw new Error(err.response.data.message)
  }
};

export async function userlogout() {
  // await httpRequest({
  //   method: 'post',
  //   url: authApi.logout,

  // })
  removeUser()
};

export async function userEdit(data) {
  try {
    const res = await httpRequest({
      method: 'PATCH',
      url: authApi.me,
      data: data,
      
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
      url: `users/${id}`,
    })
  } catch (err) {
    console.log(err);
  }
};

