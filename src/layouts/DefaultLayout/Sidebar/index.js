import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;
