import { DefaultTheme } from '@react-navigation/native';

const themes ={
    1: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#36454F',
            text: 'white'
        }
    },
}

export default themes[1];

// primary: string;
// background: string;
// card: string;
// text: string;
// border: string;
// notification: string;