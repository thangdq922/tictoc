import httpRequest from "../../utils/httpRequest";

 async function like(id) {
    try {
        const res = await httpRequest({
            method: 'post',
            url: `videos/${id}/like`,
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
            url: `videos/${id}/unlike`,
            data: id
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export async function handleLikeFunc(video) {
    let newVideo;
    if (video && video.isLiked) {
        newVideo = await unlike(video.id);
    } else {
        newVideo = await like(video.id);
    }

    return newVideo;
};

export default handleLikeFunc;
