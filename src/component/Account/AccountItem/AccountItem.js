import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.css';
import Image from '../../Image';


function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={styles['wrapper']}>
            <Image
                className={styles['avatar']}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={styles['info']}>
                <h4 className={styles['name']}>
                    <span>{data.full_name}</span>
                    {data.tick && < FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                </h4>
                <span className={styles['username']}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;