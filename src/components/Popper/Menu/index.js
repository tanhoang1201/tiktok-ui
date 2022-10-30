import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, items }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} item={item} />);
    };
    return (
        <Tippy
            interactive
            // visible
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
