import {useEffect} from 'react';
import Context from './Context';

function MyProvider({children}) {
    const obj = {

    }

    useEffect(() => {
        console.log('GitHunt - Find Any Github User')
    }, [])

    return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default MyProvider;