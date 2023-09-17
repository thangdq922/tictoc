import httpRequest from "../utils/httpRequest";

export const deleteNotifs = async () => {
    try {
        await httpRequest({
            method: 'delete',
            url: `/notifications`,
        })
    } catch (err) {
        console.log(err);
    }
} 

export const saveStatus = async () => {
    try {
        await httpRequest({
            method: 'patch',
            url: `/notifications`,
        })
    } catch (err) {
        console.log(err);
    }
}