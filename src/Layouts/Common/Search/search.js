import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import AccountItem from "../../../component/Account/AccountItem"
import { Wrapper as PopperWrapper } from '../../../component/Popper';
import { SearchIcon } from "../../../component/Icons";
import styles from './Search.module.css'
import { useDebounce } from "../../../hooks";
import * as searchService from '../../../services/searchService';
import { Link } from "react-router-dom";
import config from "../../../config/routes";


function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchUser, setSearchUser] = useState([]);
    const [searchVideo, setSearchVideo] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef()

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchUser([])
            return
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.searchUser(debouncedValue);
            const result1 = await searchService.searchVideo(debouncedValue);
            setSearchVideo(result1)
            setSearchUser(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchUser([])
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
                visible={showResult && (searchUser.length > 0 || searchVideo.length > 0)}
                render={(attrs) => (
                    <div className={styles['search-result']} tabIndex="-1" {...attrs} >
                        <PopperWrapper>
                            {searchVideo?.map((result) =>
                                <div className={styles['search-video']} key={result.id}>
                                    <Link to={config.searchLink(result.caption, 'video')} style={{ display: 'flex' }}>
                                        <SearchIcon className={styles.icon} /> {result.caption}
                                    </Link>
                                </div>
                            )}
                            <h4 className={styles['search-title']}>Accounts</h4>
                            {searchUser?.map((result) =>
                                <AccountItem key={result.id} data={result} />
                            )}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={styles.search}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            className={styles.input}
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
                        <Link to={config.searchLink(searchValue, 'video')}>
                            <button className={styles['search-btn']} type="submit">
                                <SearchIcon />
                            </button>
                        </Link>
                    </form>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search