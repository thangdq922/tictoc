import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.css"
import config from '../../../config'
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../component/Icons'
import SuggestedAccounts from "../../../component/Account/SuggestedAccounts";
import { Link } from "react-router-dom";
import Button from "../../../component/Button";



function SideBar() {
  // const { user } = useSelector((state) => state.user);
  const user = false

  return (
    <aside className={styles.wrapper}>
      <Menu>
        <MenuItem to={config.routesPublic.home} icon={<HomeIcon />} >For You</MenuItem>
        <MenuItem to={config.routesPrivate.following} icon={<UserGroupIcon />} >Following</MenuItem>
        <MenuItem to={config.routesPublic.live} icon={<LiveIcon />} >LIVE</MenuItem>
      </Menu>
      <hr className={styles.hr} />
      {!user && (
        <div className={styles.sidebar_login_wrapper}>
          <div className={styles.sidebar_login}>
            <p className={styles.login_tip}>
              Log in to follow creators, like videos, and view comments.
            </p>
            <Link to={config.routesPublic.login}>
              <Button outline large className={styles.button_login}>
                Log in
              </Button>
            </Link>
          </div>

        </div>
      )  }

      <SuggestedAccounts label="Suggested Accounts" />
      {user && <SuggestedAccounts label="Following Accounts" />}
      <hr className={styles.hr} />
      <div className={styles.contact}>
          <p>Contact me</p>
          <a
            className={styles.facebook}
            href="/"
          >
            CCCC
          </a>
        </div>
    </aside>
  )
};

export default SideBar;