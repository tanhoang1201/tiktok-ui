import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as apiService from '../../../ApiService/search';
import style from './Search.module.scss';
import { SearchIcon } from '../../../icons';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const inpRef = useRef();

    let deBounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!deBounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const res = await apiService.search(deBounced);
            setSearchResult(res);
            setLoading(false);
        };

        fetchApi();
    }, [deBounced]);

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResults && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((value) => (
                                <AccountItem key={value.id} data={value} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResults(false)}
            >
                <div className={cx('search')} tabIndex="0">
                    <input
                        ref={inpRef}
                        value={searchValue}
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onChange={(e) => {
                            let searchValue = e.target.value;
                            if (!searchValue.startsWith(' ')) {
                                setSearchValue(e.target.value);
                            }
                        }}
                        onFocus={() => {
                            if (searchValue) {
                                setShowResults(true);
                            }
                        }}
                    />
                    {searchValue && !loading && (
                        <div
                            className={cx('clear', 'icon')}
                            onClick={() => {
                                setSearchValue('');
                                inpRef.current.focus();
                                setSearchResult([]);
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    )}

                    {loading && (
                        <div className={cx('loading', 'icon')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    )}
                    <span className={cx('separate')}></span>
                    <div className={cx('search-icon')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('search-icon-svg')} />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
