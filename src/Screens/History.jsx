import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Hooks from "../Hooks";

function History({navigation, route}) {
    const [list, setList] = useState([]);

    useFocusEffect(React.useCallback(() => { Jobs() }, []));
    
    const Jobs = async () => {
        const cacheHistory = await Hooks.history()
        setList(cacheHistory)
    }

    const renderCard = ({ item }) => {

        return (
            <TouchableOpacity>
                <Text>{item}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={list.reverse()}
                renderItem={renderCard}
                keyExtractor={(item, i) => item + "-history-" + i}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default History;