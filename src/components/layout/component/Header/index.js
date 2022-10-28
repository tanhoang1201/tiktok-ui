import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to="/">
                    <img src={images.logo} alt="Tik Tok" />
                </Link>
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
                <div className="actions"></div>
            </header>
        </div>
    );
}

export default Header;
