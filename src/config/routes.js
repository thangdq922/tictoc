export const routesPublic = {
    home: '/',
    video: '/:nickname/video/:id',
    upload: '/upload',
    search: '/search',
    live: '/live',
    register: '/register',
    login: '/login',
    profileLink: (nickname) => `/@${nickname}`,
    videoLink: (content) => `/@${content.user.nickname}/video/${content.id}`
};

export const routesPrivate = {
    upload: '/upload',
    following: '/following',
    messages: "/messages",
    profile: "/:nickname"
};

