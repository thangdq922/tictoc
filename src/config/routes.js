export const config = {
    home: '/',
    video: `/:userName/video/:id`,
    search: '/search/:type',
    live: '/live',
    setting:'/setting',
    profileLink: (userName) => `/@/${userName}`,
    videoLink: (content) => `@${content.user.userName}/video/${content.id}`,
    searchLink: (q, type) => `/search/${type}?q=${q}`,

    upload: '/upload',
    following: '/following',
    messages: "/messages",
    profile: `/@/:userName`
};

export default config

