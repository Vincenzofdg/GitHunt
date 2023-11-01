import { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";

import str from "../Strings";

function SearchInput({action}) {
    const [user, setUser] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={user}
                onChangeText={setUser}
                placeholder={str.placeholder}
                style={{ textAlign: "center", flex: 1}}
            />
            <TouchableOpacity
                style={[styles.btn, !user && { backgroundColor: "#6082B6" }]}
                onPress={() => action(user)}
                disabled={!user}
            >
                <Text style={styles.text}>{str.searchBtn}</Text>
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
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    }
})

export default SearchInput;