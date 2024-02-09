import { useContext, useEffect } from "react";
import Context from "../Context/Context";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Component from "../Components";
import Service from "../Services";
import localized from "../Strings";
import Hooks from "../Hooks";

function InitialSearch({navigation, route}) {
    const { setTheme, loader, setLoader } = useContext(Context);
    const str = localized[route.name];

    useEffect(() => {
        async function Jobs() {
            const hasHistory = await Hooks.checkCache('history')
            if (!!hasHistory) return
            await Hooks.createCache("history", [])
        }
        Jobs()
    }, [])

    const handlePress = async (value) => {
        const data = await Service.findUsers(value, 1);
        const historyList = await Hooks.history();

        if (!historyList.includes(value)) {
            historyList.push(value);
            await Hooks.createCache("history", historyList)
        }
        
        setLoader(true)
        setTheme(2);

        navigation.navigate('TabMenu', {
            screen: 'Search',
            params: {...data, searched: value}
        });

        setTimeout(() => setLoader(false), 2000)
    }

    return !loader && (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.text}>{str.title}</Text>
                <Component.Search action={handlePress} />
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
        bottom: '55%',
        width: '100%'
    },
    text: {
        width: '75%',
        alignSelf: "center",
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '600',
    }
})

export default InitialSearch;