import { useState } from 'react';
import images from '../../assets/images';
import { forwardRef } from 'react';

function Image({ src, alt, fallBack: customFallBack = images.errorImage }, ref) {
    const [fallBack, setFallBach] = useState('');

    return <img ref={ref} src={fallBack || src} alt={alt} onError={() => setFallBach(customFallBack)} />;
}

export default forwardRef(Image);
