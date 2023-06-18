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

import styles from './Header.module.css'
import images from '../../../assets/image';
import Button from '../../../component/Button/Button';
import Menu from '../../../component/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../component/Icons';
import Image from '../../../component/Image';
import Search from '../Search';



function Header() {
  const currentUser = true;

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
          <a aria-label="Vào bảng tin Cho bạn trên TikTok" href="/">
            <img src={images.logo} alt="TikTok" />
          </a>
        </div>

    <Search/>

        <div className={styles.actions}>

          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={styles['action-btn']}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={styles['action-btn']}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={styles['action-btn']}>
                  <InboxIcon />
                  <span className={styles['badge']}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text >Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}



          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={styles['user-avatar']}
                src="adda"
                // src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8e3372004a5850a78ee347f0d24e85c5~c5_100x100.jpeg?x-expires=1687143600&x-signature=iyiBzmWVAUGs%2BYQAyuweSm6bkrQ%3D"
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