import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function MenuItem({ item, onClick }) {
    let Com = 'div';
    let props = {};

    if (item.to) {
        Com = Link;
        props.to = item.to;
    }
    return (
        <Com className={cx('item', { separate: item.separate })} {...props} onClick={onClick}>
            {item.icon && <span className={cx('icon')}>{item.icon}</span>}
            <span className={cx('title')}>{item.title}</span>
        </Com>
    );
}

MenuItem.propsType = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
