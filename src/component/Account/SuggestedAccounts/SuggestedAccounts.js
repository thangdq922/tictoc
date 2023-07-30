import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


import AccountItem from './AccountItem'
import styles from './SuggestedAccount.module.css'
import * as userService from '../../../services/user/usersService'

function SuggestedAccounts({ label }) {
    const [perpage, setPerpage] = useState(5);

    const handleSeeMore = () => {
        if (perpage % 5 !== 0 || perpage === 20) {
            setPerpage(5);
        } else {
            setPerpage((prev) => prev + 5);
        }
    }

    const { data: accounts } = useQuery({
        queryKey: ['accountSuggested', perpage],
        queryFn: async () => {
            const data = await userService.suggestedList(1, perpage)
            if (data.length < perpage) {
                setPerpage(data.length)
            }
            return data
        }
    })

    return (
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            {accounts?.map((result) =>
                <AccountItem key={result.id} data={result} />
            )}
            <p className={styles['more-btn']} onClick={handleSeeMore}>
                {(perpage % 5 !== 0 || perpage === 20) ? "See less" : "See more"}
            </p>
        </div>
    )
}

export default SuggestedAccounts