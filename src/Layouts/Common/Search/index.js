import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import AccountItem from "../../../component/AccountItem"
import { Wrapper as PopperWrapper } from '../../../component/Popper';
import { SearchIcon } from "../../../component/Icons";
import styles from './search.module.css'




function Search() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          setSearchResult([1,2,5,5,6]);
        }, 0);
      }, []);


    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={styles['search-result']} tabIndex="-1" {...attrs} >
                    <PopperWrapper>
                        <h4 className={styles['search-title']}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={styles.search}>
                <form>
                    <input  placeholder='Search accounts or videos' spellCheck={false} />
                    <FontAwesomeIcon icon={faCircleXmark} className={styles['reset-search']} />
                    <FontAwesomeIcon icon={faSpinner} className={styles.loading} />
                    <span className={styles.spilter}></span>
                    <button className={styles['search-btn']}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </HeadlessTippy>
    )
}

export default Search