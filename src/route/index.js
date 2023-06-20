import Following from "../pages/Common/Following/index";
import Home from "../pages/Common/Home/index";
import NoPage from "../pages/ErrorPage/noPage";
import Upload from "../pages/User/Upload/upload";
import Profile from "../pages/User/Profile/profile";
import Searchs from "../pages/Common/Search/search";
import Config from '../config';


const publicR = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.search, component: Searchs, layout: null },
    
]

const privateR =[
    {path: '/u/upload', component: Upload},
    // {path: '/u/profile', component: Profile},


]

const errorR =[
    {path: '*', component: NoPage}

]

export {publicR, privateR, errorR}