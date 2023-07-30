import httpRequest from "../../utils/httpRequest";

async function follow(id) {
    try {
        const res = await httpRequest({
            method: 'post',
            url: `users/${id}/follow`,
            data: id
        })
        return res.data;
        
    } catch (err) {
        console.log(err);
    }
};

async function unfollow(id) {
    try {
        const res = await httpRequest({
            method: 'post',
            url: `users/${id}/unfollow`,
            data: id
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

const handleFollowFunc = async (user) => {
    let newUser;
    if (user && user.followed) {
        newUser = await unfollow(user.id);
    } else {
        newUser = await follow(user.id);
    }

    return newUser && newUser.followed;
};

export default handleFollowFunc;
