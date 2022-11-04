import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCamera,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import { Menu } from '../../../components/Popper';
import { LetterIcon, MessageIcon, UploadIcon } from '../../../components/icons';
import Image from '../../../components/Images';
import Search from '../Search';
import config from '../../../config';
const cx = classNames.bind(style);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Viet Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    let currentUser = true;

    const handleClick = (item) => {
        console.log(item);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faCamera} />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="Tik Tok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload video" placement="bottom">
                                <Link to={config.routes.upload} className={cx('actions-btn')}>
                                    <UploadIcon />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <LetterIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>
                                <span>Log in</span>
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleClick}>
                        {currentUser ? (
                            <div className={cx('user-avatar')}>
                                <Image
                                    src=""
                                    alt="Avatar"
                                    // fallBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86ce76ce4efec4f0f8bf1ee3793da03b~c5_100x100.jpeg?x-expires=1667458800&x-signature=cJbRuzYT6r0Npw7qu1juTZn1FiY%3D"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('more-icon')} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
