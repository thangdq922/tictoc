import { useEffect, useState } from "react";

import httpRequest from '../../../utils/httpRequest';
import AccountItem from './AccountItem'
import styles from './SuggestedAccount.module.css'

function SuggestedAccounts({ label }) {
    const [accounts, setAccounts] = useState([])
    const [viewAccount, setViewAccount] = useState('less')

    const showAccount = () =>
        {viewAccount === 'less' ? setViewAccount('more') : setViewAccount('less')}
    
    

    useEffect(() => {
        // httpRequest.get(`https://tiktok.fullstack.edu.vn/api/users/search?q=uu&type=less`)
        httpRequest({
            method: 'get',
            url: 'users/search',
            params: {
                q: 'uu',
                type: viewAccount,
            },
        })
            .then((response) => {
                setAccounts(response.data.data);
            })
            .catch(error => console.log(error))

    }, [viewAccount]
    )

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {accounts.map((result) =>
                <AccountItem key={result.id} data={result} />
            )}
            <p className={styles['more-btn']} onClick={showAccount}>
                See {viewAccount === 'less' ? 'more' : 'less'}
            </p>
        </div>
    )
}

export default SuggestedAccounts