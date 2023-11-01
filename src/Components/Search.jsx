import { useEffect } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

import Hooks from "../Hooks";
import Service from "../Services";
import images from '../assets';
import str from "../Strings";

function Search({state, updateUsers, updateTotal, isAllowed}) {
    const debouncedValue = Hooks.useDebounce(state.value);

    useEffect(() => {
        async function FetchData() {
            const {total, users} = await Service.findUsers(state.value, 1);
            
            updateUsers(users)
            updateTotal(total)
        }

        if (!!debouncedValue) {
            if (!!isAllowed.state) {
                isAllowed.change(false)
                return
            }
            FetchData()
        }
    }, [debouncedValue])

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
        padding: 20
    },
    icon: {
        width: 35,
        height: 35,
        tintColor: '#FFF5EE',
        marginLeft: 15
    }
})

export default Search;