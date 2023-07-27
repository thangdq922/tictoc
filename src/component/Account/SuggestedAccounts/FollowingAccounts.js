import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import AccountItem from './AccountItem'
import styles from './SuggestedAccount.module.css'
import * as userService from '../../../services/user/usersService'


function FollowingAccounts({ label }) {
    const [page, setPage] = useState(1);
    const [accounts, setAccounts] = useState([])

    const handleSeeMore = () => {
        if (data?.length === 0) {
            setPage(1)
            setAccounts([])
        } else {
            setPage(page + 1);
            setAccounts((rest) => [...rest, ...data])
        }

    };

    const { data } = useQuery({
        queryKey: ['followingAccounts', page],
        queryFn: () => userService.followingList(page)
    })

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {accounts.length !== 0 ? accounts?.map((result) =>
                <AccountItem key={result.id} data={result} />
            ) : data?.map((result) =>
                <AccountItem key={result.id} data={result} />)
            }
            <p className={styles['more-btn']} onClick={handleSeeMore}>
                {data?.length === 0 ? "See less" : "See more"}
            </p>
        </div>
    )
}

export default FollowingAccounts