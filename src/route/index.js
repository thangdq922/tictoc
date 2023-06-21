import Following from "../pages/Common/Following/index";
import Home from "../pages/Common/Home/index";
import NoPage from "../pages/ErrorPage/noPage";
import Upload from "../pages/User/Upload/upload";
import Profile from "../pages/User/Profile/profile";
import Searchs from "../pages/Common/Search/search";
import Config from '../config';
import { LiveIcon } from "../component/Icons";


const publicR = [
    { path: Config.routesPublic.home, component: Home },
    { path: Config.routesPublic.following, component: Following },
    { path: Config.routesPublic.profile, component: Profile },
    { path: Config.routesPublic.search, component: Searchs },
    { path: Config.routesPublic.live, component: LiveIcon }

]

const privateR = [
    { path: Config.routesPrivate.upload, component: Upload },
    // {path: '/u/profile', component: Profile},


]

const errorR = [
    { path: '*', component: NoPage }

]

export { publicR, privateR, errorR }