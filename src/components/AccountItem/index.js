import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './AccountItem.module.scss';
import Image from '../Images';

const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <p>{data.nickname}</p>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </h4>
                <span className={cx('userName')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
