import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [deBounceValue, setDeBounceValue] = useState(value);
    useEffect(() => {
        let timeId = setTimeout(() => {
            setDeBounceValue(value);
        }, delay);
        return () => clearTimeout(timeId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return deBounceValue;
}

export default useDebounce;
