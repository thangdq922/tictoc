import Following from "../pages/Default/Following/Following";
import Home from "../pages/Default/Home/Home";
import NoPage from "../pages/ErrorPage";
import Upload from "../pages/User/Upload";
import Profile from "../pages/User/Profile";
import Searchs from "../pages/Default/Search";
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