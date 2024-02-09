import {useEffect, useState} from 'react';
import Context from './Context';

function MyProvider({children}) {
    const [theme, setTheme] = useState(1);
    const [loader, setLoader] = useState(false);
    const [history, setHistory] = useState([]);

    const obj = {
        loader, setLoader,
        theme, setTheme,
        history, setHistory
    }

    useEffect(() => {
        console.log('GitHunt - Find Any Github User')
    }, [])

    return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;