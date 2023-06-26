export const routesPublic = {
    home: '/',
    video: '/:nickname/video/:id',
    upload: '/upload',
    search: '/search',
    live: '/live',
    register: '/register',
    login: '/login',
    messages: "/messages",
    profileLink: (nickname) => `/@${nickname}`,
    videoLink: (content) => `/@${content.user.nickname}/videos/${content.id}`
};

export const routesPrivate = {
    upload: '/upload',
    following: '/following',
    profile: "/:nickname"
};

