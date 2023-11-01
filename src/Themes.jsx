import { DefaultTheme } from '@react-navigation/native';

export default themes ={
    1: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#36454F',
            text: 'white'
        }
    },
    2: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            // background: '#000000',
            background: '#36454F',
            text: 'white'
        }
    },
}
