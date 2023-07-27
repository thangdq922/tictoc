import httpRequest from "../../utils/httpRequest";

 async function like(id) {
    console.log(id)
    try {
        const res = await httpRequest({
            method: 'post',
            url: `comments/${id}/like`,
            data: id
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

 async function unlike(id) {
    try {
        const res = await httpRequest({
            method: 'post',
            url: `comments/${id}/unlike`,
            data: id
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export async function handleLikeFunc(comment) {
    let newcomment;
    if (comment && comment.is_liked) {
        newcomment = await unlike(comment.id);
    } else {
        newcomment = await like(comment.id);
    }

    return newcomment;
};

export default handleLikeFunc;
