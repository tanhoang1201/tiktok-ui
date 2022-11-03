import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

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
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory([...history.slice(0, history.length - 1)]);
                                }}
                            />
                        )}{' '}
                        <div className={cx('menuList')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory([...history.slice(0, 1)])}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
