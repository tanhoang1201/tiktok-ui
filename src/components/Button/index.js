import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ to, href, onClick, children, outline, primary, large, text, disable, rounded, ...passProps }) {
    let Com = 'button';
    const props = {
        ...passProps,
    };

    props.onClick = onClick;

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') || typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Com = Link;
        props.to = to;
    } else if (href) {
        Com = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', { primary, outline, large, text, disable, rounded });
    return (
        <Com {...props} className={classes}>
            <p>{children}</p>
        </Com>
    );
}

export default Button;
