import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.css';
import Image from '../../Image';
import config from '../../../config';


function AccountItem({ data }) {
    return (
        <Link to={config.profileLink(data.userName)} className={styles['wrapper']}>
            <Image
                className={styles['avatar']}
                src={data.avatar}
                alt={data.name}
            />
            <div className={styles['info']}>
                <h4 className={styles['name']}>
                    <span>{data.userName}</span>
                    {data.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                </h4>
                <span className={styles['username']}>{data.name}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;