export const routesPublic = {
    home: '/',
    video: "/@:nickname/videos/:id",
    upload: '/upload',
    search: '/search',
    live: '/live',
    register: '/register',
    login: '/login',
    messages: "/messages",
};

export const routesPrivate = {
    upload: '/upload',
    following: '/following',
    profile: "/@:nickname"
};

