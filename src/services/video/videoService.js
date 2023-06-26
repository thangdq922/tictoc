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
        return res.data.data;
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
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
};




