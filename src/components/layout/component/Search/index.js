import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import { SearchIcon } from '../../../icons';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';

const cx = classNames.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const inpRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                        if (searchValue) {
                            setShowResults(true);
                        }
                    }}
                />
                {searchValue && (
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
                {/* <div className={cx('loading', 'icon')}>
                    <FontAwesomeIcon icon={faSpinner} />
            </div>*/}
                <span className={cx('separate')}></span>
                <div className={cx('search-icon')}>
                    <SearchIcon className={cx('search-icon-svg')} />
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
