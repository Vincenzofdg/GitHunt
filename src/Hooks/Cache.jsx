import AsyncStorage from '@react-native-async-storage/async-storage';

export const createCache = async (name, obj) => {
    await AsyncStorage.setItem(name, JSON.stringify(obj));
}

export const checkCache = async (name) => {
    const cache = await AsyncStorage.getItem(name);

    if (cache !== null) {
        const data = JSON.parse(cache);
        return data
    }

    return false
}