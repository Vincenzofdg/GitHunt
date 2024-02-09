import { useEffect, useContext } from "react";
import Context from "../Context/Context";
import { StyleSheet, TextInput, View, Image } from "react-native";

import Hooks from "../Hooks";
import Service from "../Services";
import images from '../assets';
import str from "../Strings";

function Search({state, updateUsers, updateTotal, isAllowed}) {
    const { history, setHistory } = useContext(Context);
    const debouncedValue = Hooks.useDebounce(state.value);


    useEffect(() => {
        async function FetchData() {
            const {total, users} = await Service.findUsers(state.value, 1);
            updateUsers(users)
            updateTotal(total)
            handleHistory(debouncedValue);
        }

        if (!!debouncedValue) {
            if (!!isAllowed.state) {
                isAllowed.change(false);
                handleHistory(debouncedValue);
                return
            }
            FetchData()
        }

        if (!debouncedValue && !isAllowed.state) {
            updateUsers([])
        }
    }, [debouncedValue]);

    const handleHistory = async (user) => {
        const historyList = await Hooks.history();
        if (!!historyList.includes(user)) return;
        historyList.push(user);
        await Hooks.createCache("history", historyList);
        return
    }

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={images.Lupa} />
            <TextInput
                value={state.value}
                onChangeText={state.action}
                placeholder={str.placeholder}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(07,25,51)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        overflow: "hidden",
        width: '90%',
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: "center"

    },
    input: {
        textAlign: "left",
        flex: 1,
        fontSize: 20,
        padding: 20,
        color: "white"
    },
    icon: {
        width: 35,
        height: 35,
        tintColor: '#FFF5EE',
        marginLeft: 15
    }
})

export default Search;