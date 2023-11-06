import httpRequest from '../../utils/httpRequest'

export async function getListVideo(type = 'for-you', page) {
    try {
        const res = await httpRequest({
            method: 'get',
            url: 'videos',
            params: {
                type: type,
                page: page
            }
        })
        return res.data;
    } catch (err) {
        console.log(err);
        return []
    }
};

export async function getVideo(id) {
    try {
        const res = await httpRequest({
            method: 'get',
            url: `videos/${id}`,
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export async function postVideo(data) {
    try {
        await httpRequest({
            method: 'post',
            url: "videos",
            data: data,
           
        })
    } catch (err) {
        console.log(err);
    }
};

export async function editVideo(data) {
    try {
        await httpRequest({
            method: 'patch',
            url: `videos/${data.id}`,
            data: data,
           
        })
    } catch (err) {
        console.log(err);
    }
};

export async function deleteVideo(id) {
    try {
        await httpRequest({
            method: 'delete',
            url: `videos/${id}`,
        })
    } catch (err) {
        console.log(err);
    }
};

export async function setView(id) {
    try {
        await httpRequest({
            method: 'patch',
            url: `videos/${id}/view`,
        })
    } catch (err) {
        console.log(err);
    }
};




