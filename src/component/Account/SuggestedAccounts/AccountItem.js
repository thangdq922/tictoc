import { Link } from 'react-router-dom'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';


import styles from './SuggestedAccount.module.css'
import Image from '../../Image';
import AccountPreview from '../AccountPreview/';
import { Wrapper as PopperWrapper } from '../../Popper';
import config from '../../../config';



function AccountItem({ data: account }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={account} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <Link to={config.profileLink(account.userName)} className={styles['account-item']}>
                    <Image
                        className={styles['avatar']}
                        src={account.avatar}
                        alt=""
                    />
                    <div className={styles['info']}>
                        <h4 className={styles['name']}>
                            <span>{account.name}</span>
                            {account.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                        </h4>
                        <span className={styles['userName']}>{account.userName}</span>
                    </div>
                </Link>
            </Tippy>
        </div>


    )
}

export default AccountItem