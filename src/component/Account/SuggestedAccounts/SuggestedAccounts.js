import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


import AccountItem from './AccountItem'
import styles from './SuggestedAccount.module.css'
import * as userService from '../../../services/user/usersService'

function SuggestedAccounts({ label }) {
    const [perpage, setPerpage] = useState(5);

    const handleSeeMore = () => {
        if (perpage !== 20) {
            setPerpage((prev) => prev + 5);
        } else {
            setPerpage(5);
        }
    }

    const { data: accounts } = useQuery({
        queryKey: ['accountSuggested', perpage],
        queryFn: () => userService.suggestedList(1, perpage)
    })


    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {accounts?.map((result) =>
                <AccountItem key={result.id} data={result} />
            )}
            <p className={styles['more-btn']} onClick={handleSeeMore}>
            {perpage === 20  ? "See less" : "See more"}
            </p>
        </div>
    )
}

export default SuggestedAccounts