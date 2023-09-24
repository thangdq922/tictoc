import httpRequest from "../utils/httpRequest";

export const getChatroom = async (userNameTo, page) => {
    try {
        const res = await httpRequest({
            method: 'get',
            url: `mess/${userNameTo}/chatroom`,
            params: { page: page }
        })
        return res.data
    } catch (err) {
        console.log(err);
    }
} 