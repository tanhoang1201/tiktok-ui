import Header from '../component/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import style from './DefaultLayout.module.scss';

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
