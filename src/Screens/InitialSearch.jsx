import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import SearchInput from "../Components/SearchInput";
import localized from "../Strings";

function InitialSearch({navigation, route}) {
    const str = localized[route.name];

    console.log(Object.keys(navigation))

    const handlePress = (value) => {
        console.log(Object.keys(navigation))
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.text}>{str.title}</Text>
                <SearchInput 
                    placeholder={str.placeholder}
                    action={handlePress}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        position: "absolute",
        bottom: '60%',
        width: '100%'
    },
    text: {
        width: '75%',
        alignSelf: "center",
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '600'
    }
})

export default InitialSearch;