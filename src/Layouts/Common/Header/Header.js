import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { HiOutlinePlus } from "react-icons/hi";

import styles from './Header.module.css'
import images from '../../../assets/image';
import Button from '../../../component/Button/Button';
import Menu from '../../../component/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../component/Icons';
import Image from '../../../component/Image';
import Search from '../Search';
import config from '../../../config';




function Header() {
  const currentUser = false;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tiếng Việt',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
    },
  ];


  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles['logo']}>
          <Link aria-label="Vào bảng tin Cho bạn trên TikTok" to={config.routesPublic.home}>
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>

        <Search />

        <div className={styles.actions}>

          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <Link className={styles['action-btn']} to={config.routesPublic.upload}>
                  <UploadIcon />
                </Link>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <Link className={styles['action-btn']} to={config.routesPrivate.messages}>
                  <MessageIcon />
                </Link>
              </Tippy>
              <Tippy delay={[0, 50]} content="Notification" placement="bottom">
                <Link className={styles['action-btn']}>
                  <InboxIcon />
                  <span className={styles['badge']}>12</span>
                </Link>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<HiOutlinePlus style={{width:24}} />} to={config.routesPublic.login}>Upload</Button>
              <Button style={{ height: 36 }} primary to='/login'>Log in</Button>
            </>
          )}



          <Menu items={currentUser ? userMenu : MENU_ITEMS} offset={[12, 8]} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={styles['user-avatar']}
                src="aaa"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={styles['more-btn']}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>

      </div>
    </header>
  )
};

export default Header;