import axios from "axios";


import AccountItem from './AccountItem'
import styles from './SuggestedAccount.module.css'
import { useEffect, useState } from "react";

function SuggestedAccounts({ label }) {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        axios.get(`https://tiktok.fullstack.edu.vn/api/users/search?q=uu&type=less`)
            .then(res => {
                setAccounts(res.data.data);
            })
            .catch(error => console.log(error))
    }, []
    )

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {accounts.map((result) =>
                <AccountItem key={result.id} data={result} />
            )}
            <p className={styles['more-btn']}>See more</p>
        </div>
    )
}

export default SuggestedAccounts