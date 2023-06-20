import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import AccountItem from "../../../component/AccountItem"
import { Wrapper as PopperWrapper } from '../../../component/Popper';
import { SearchIcon } from "../../../component/Icons";
import styles from './search.module.css'
import { useDebounce } from "../../../hooks";
import * as searchService from '../../../services/searchService';




function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    function handleHideResult() {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };



    return (
        <div>
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={styles['search-result']} tabIndex="-1" {...attrs} >
                    <PopperWrapper>
                        <h4 className={styles['search-title']}>Accounts</h4>
                        {searchResult.map((result) =>
                            <AccountItem key={result.id} data={result} />
                        )}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={styles.search}>
                <form>
                    <input
                        ref={inputRef}
                        placeholder='Search accounts or videos'
                        value={searchValue}
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (<FontAwesomeIcon
                        icon={faCircleXmark}
                        className={styles['reset-search']}
                        onClick={handleClear} />)}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={styles.loading} />}
                    <span className={styles.spilter}></span>
                    <button className={styles['search-btn']}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </HeadlessTippy>
        </div>
    )
}

export default Search