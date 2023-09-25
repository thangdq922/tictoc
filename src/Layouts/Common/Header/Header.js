import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlinePlus } from "react-icons/hi";
import { useContext, useEffect, useState } from 'react';

import styles from './Header.module.css'
import images from '../../../assets/image';
import Button from '../../../component/Button/Button';
import Menu from '../../../component/Popper/Menu';
import { MessageIcon, UploadIcon } from '../../../component/Icons';
import Image from '../../../component/Image';
import Search from '../Searchs';
import config from '../../../config';
import { MENU_ITEMS_1, MENU_ITEMS_2 } from '../../../component/DataMenu/dataMenu'
import { getUser } from '../../../hooks/auth/user.localstore';
import useLogout from '../../../hooks/auth/useLogOut';
import useModal from '../../../hooks/useModal';
import ModalAuth from '../../../pages/Default/ModalAuth/ModalAuth';
import Notify from '../Notify';
import { StompContext } from '../../../utils/StompClientProvider'


function Header() {
  const navigate = useNavigate();
  const userCurrent = getUser()?.data
  const logout = useLogout()
  const { isOpen, toggle } = useModal()
  const client = useContext(StompContext);
  const [badge, setBadge] = useState(1)


  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // handle language
        break;
      case 'toProfile':
        navigate(config.profileLink(userCurrent.userName));
        break;
      case 'logout':
        logout.mutate()
        break
      case 'setting':
        navigate(config.setting);
        break;
      default:
    }
  };

  useEffect(() => {
    setBadge(client.messages[0]?.countNotRead)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.messages])

  return (
    <>
      <ModalAuth open={isOpen} close={toggle} />

      <header className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles['logo']}>
            <Link aria-label="Vào bảng tin Cho bạn trên TikTok" to={config.home}>
              <img src={images.logo} alt="TikTok" />
            </Link>
          </div>

          <Search />

          <div className={styles.actions}>
            {userCurrent ? (
              <>
                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                  <Link className={styles['action-btn']} to={config.upload}>
                    <UploadIcon />
                  </Link>
                </Tippy>
                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                  <Link className={styles['action-btn']} to={config.messages}>
                    <MessageIcon />
                    {badge !== 0 && <span className={styles['badge']}>{badge}</span>}
                  </Link>
                </Tippy>
                <div>
                  <Notify />
                </div>
              </>
            ) : (
              <>
                <Button text leftIcon={<HiOutlinePlus style={{ width: 24 }} />} onClick={toggle}>Upload</Button>
                <Button style={{ height: 36 }} primary onClick={toggle}>Log in</Button>
              </>
            )}


            <Menu items={userCurrent ? MENU_ITEMS_2 : MENU_ITEMS_1} offset={[12, 8]} onChange={handleMenuChange}>
              {userCurrent ? (
                <Image
                  className={styles['user-avatar']}
                  src={userCurrent.avatar}
                  alt={userCurrent.name}
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
    </>
  )
};

export default Header;