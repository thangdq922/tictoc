import { Link } from "react-router-dom";

import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.css"
import config from '../../../config'
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../component/Icons'
import SuggestedAccounts from "../../../component/Account/SuggestedAccounts";
import Button from "../../../component/Button";
import { getUser } from "../../../hooks/auth/user.localstore";
import FollowingAccounts from "../../../component/Account/SuggestedAccounts/FollowingAccounts";



function SideBar() {
  const user = getUser()

  return (
    <aside className={styles.wrapper}>
      <div className={styles.sidebar_scrollbar}>
        <Menu>
          <MenuItem to={config.home} icon={<HomeIcon />} >For You</MenuItem>
          <MenuItem to={config.following} icon={<UserGroupIcon />} >Following</MenuItem>
          <MenuItem to={config.live} icon={<LiveIcon />} >LIVE</MenuItem>
        </Menu>
        {!user ? (
          <>
            <hr className={styles.hr} />
            <div className={styles.sidebar_login_wrapper}>
              <div className={styles.sidebar_login}>
                <p className={styles.login_tip}>
                  Log in to follow creators, like videos, and view comments.
                </p>
                <Link to={config.login}>
                  <Button outline large className={styles.button_login}>
                    Log in
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )
          : <FollowingAccounts label="Following Accounts" />
        }
        <SuggestedAccounts label="Suggested Accounts" />
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
      </div>
    </aside>
  )
};

export default SideBar;