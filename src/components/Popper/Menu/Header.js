import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <div className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

export default Header;
