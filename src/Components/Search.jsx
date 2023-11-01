import { StyleSheet, TextInput, View, Image } from "react-native";

import images from '../assets';
import str from "../Strings";

function Search({state: {value, action}}) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={images.Lupa} />
            <TextInput
                value={value}
                onChangeText={action}
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