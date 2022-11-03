import Header from '../component/Header';
import Sidebar from './Sidebar';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
