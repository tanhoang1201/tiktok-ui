import { useState } from 'react';
import PropTypes from 'prop-types';
import images from '../../assets/images';

function Image({ src, alt, fallBack: customFallBack = images.errorImage }) {
    const [fallBack, setFallBach] = useState('');

    return <img src={fallBack || src} alt={alt} onError={() => setFallBach(customFallBack)} />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
