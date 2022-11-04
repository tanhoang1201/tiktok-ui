import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);

    let current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            let isParen = !!item.children;
            return (
                <MenuItem
                    key={index}
                    item={item}
                    onClick={() => {
                        if (isParen) {
                            setHistory([...history, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory([...history.slice(0, history.length - 1)]);
    };

    const handleResetMenu = () => {
        setHistory([...history.slice(0, 1)]);
    };
    return (
        <Tippy
            interactive
            // visible
            hideOnClick={false}
            offset={[14, 10]}
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {' '}
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}{' '}
                        <div className={cx('menuList')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
