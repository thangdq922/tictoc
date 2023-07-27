import httpRequest from '../utils/httpRequest';

export const searchUser = async (q, type = 'less') => {
    try {
        const res = await httpRequest({
            method: 'get',
            url: 'users/search',
            params: {
                q : q,
                type : type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchVideo = async (q, type = 'less') => {
    try {
        const res = await httpRequest({
            method: 'get',
            url: 'videos/search',
            params: {
                q : q,
                type : type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
