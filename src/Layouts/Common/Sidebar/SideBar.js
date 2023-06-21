

import Menu, {MenuItem} from "./Menu";
import styles from "./Sidebar.module.css"
import config from '../../../config'
import {HomeIcon,UserGroupIcon,LiveIcon} from '../../../component/Icons'



function SideBar() {
    return (
        <aside className={styles.wrapper}>
            <Menu>
                <MenuItem to= {config.routesPublic.home} icon ={<HomeIcon/>} >For Your</MenuItem>
                <MenuItem to= {config.routesPublic.following} icon ={<UserGroupIcon/>} >Following</MenuItem>
                <MenuItem to= {config.routesPublic.live} icon ={<LiveIcon/>} >LIVE</MenuItem>
            </Menu>
        </aside>
    )
};

export default SideBar;