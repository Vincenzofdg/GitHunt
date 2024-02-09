import { useState, useEffect } from "react";

function UseDebounce (value) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), 1000);

        return () => {
            clearInterval(handler);
        };
    }, [value]);

    return debounceValue;
}

export default UseDebounce;