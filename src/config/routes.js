export const config = {
    home: '/',
    video: `/:userName/video/:id`,
    search: '/search/:type',
    live: '/live',
    profileLink: (userName) => `/@/${userName}`,
    videoLink: (content) => `/@${content.user.userName}/video/${content.id}`,
    searchLink: (q, type) => `/search/${type}?q=${q}`,

    setting: '/setting',
    upload: '/upload',
    following: '/following',
    messages: "/messages",
    profile: `/@/:userName`
};

export default config

