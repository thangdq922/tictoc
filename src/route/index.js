import { lazy } from 'react';
import Config from '../config';
import {HeaderLayout, DefaultLayout} from '../layouts';

//Page
const Following = lazy(() => import("../pages/Default/Following"));
const Home = lazy(() => import("../pages/Default/Home"));
const Live = lazy(() => import("../pages/Default/Live"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Profile = lazy(() => import("../pages/User/Profile"));
const Upload = lazy(() => import("../pages/User/Upload"));
const Login = lazy(() => import("../pages/Default/Login"));
const Register = lazy(() => import("../pages/Default/Register"));
const Searchs = lazy(() => import("../pages/Default/Search"));
const ModalVideo = lazy(() => import("../pages/Default/ModalVideo"));
// const ModalAuth = lazy(() => import("../pages/Default/ModalAuth"));



const publicR = [
    { path: Config.home, component: Home, layout: DefaultLayout },
    { path: Config.search, component: Searchs , layout: DefaultLayout},
    { path: Config.live, component: Live, layout: DefaultLayout },
    { path: Config.login, component: Login, layout: HeaderLayout },
    { path: Config.register, component: Register, layout: HeaderLayout },
    {
        path: Config.video,
        component: ModalVideo,
        layout: HeaderLayout,
    },
   

]

const privateR = [
    { path: Config.upload, component: Upload, layout: HeaderLayout },
    { path: Config.profile, component: Profile, layout: DefaultLayout },
    { path: Config.following, component: Following, layout: DefaultLayout }

]

const errorR = [
    { path: '*', component: ErrorPage, layout: HeaderLayout }
]

export { publicR, privateR, errorR }