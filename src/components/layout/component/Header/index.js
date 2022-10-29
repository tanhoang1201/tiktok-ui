import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import style from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(style);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to="/">
                    <img src={images.logo} alt="Tik Tok" />
                </Link>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <div className={cx('clear', 'icon')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                        <div className={cx('loading', 'icon')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <span className={cx('separate')}></span>
                        <div className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </Tippy>

                <div className="actions"></div>
            </header>
        </div>
    );
}

export default Header;
