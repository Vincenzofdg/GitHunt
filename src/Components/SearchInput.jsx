import { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";

import str from "../Strings";

function SearchInput({placeholder, action}) {
    const [user, setUser] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={user}
                onChangeText={setUser}
                placeholder={!placeholder ? '' : placeholder}
                style={{marginLeft: 15}}
            />
            <TouchableOpacity style={styles.btn} onPress={() => action(user)}>
                <Text>{str.searchBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 20,
        overflow: "hidden",
        width: '80%',
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btn: {
        backgroundColor: '#1434A4',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: '25%'
    }
})

export default SearchInput;