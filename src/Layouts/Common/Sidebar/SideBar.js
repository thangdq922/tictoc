import Menu, {MenuItem} from "./Menu";
import styles from "./Sidebar.module.css"
import config from '../../../config'
import {HomeIcon,UserGroupIcon,LiveIcon} from '../../../component/Icons'
import SuggestedAccounts from "../../../component/Account/SuggestedAccounts";



function SideBar() {

  
    return (
        <aside className={styles.wrapper}>
            <Menu>
                <MenuItem to= {config.routesPublic.home} icon ={<HomeIcon/>} >For Your</MenuItem>
                <MenuItem to= {config.routesPrivate.following} icon ={<UserGroupIcon/>} >Following</MenuItem>
                <MenuItem to= {config.routesPublic.live} icon ={<LiveIcon/>} >LIVE</MenuItem>
            </Menu>

            <SuggestedAccounts label="Suggested Accounts" />
            <SuggestedAccounts label="Following Accounts" />
        </aside>
    )
};

export default SideBar;