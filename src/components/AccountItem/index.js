import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="Image"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>huynhtanbom</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <span className={cx('userName')}>Huynh Tan Bom</span>
            </div>
        </div>
    );
}

export default AccountItem;
