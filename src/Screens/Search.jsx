import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { StyleSheet, FlatList, View, Text, SafeAreaView } from "react-native";

import localized from "../Strings";
import Component from "../Components";
import Service from "../Services";

function Search({navigation, route: {name, params}}) {
    const { loader } = useContext(Context);
    const [users, setUsers] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [toSearch, setToSearch] = useState('');
    const str = localized[name];

    useEffect(() => {
        setUsers(params.users);
        setTotal(params.total);
        setToSearch(params.searched)
    }, []);

    const renderCard = ({item}) => <Component.Card nav={navigation} info={item} />

    const moreData = async () => {
        if (users.length === total) return
        const nextPage = page + 1;

        try {
            const result = await Service.findUsers(toSearch, nextPage);
            setUsers([...users, ...result.users]);
            setPage(nextPage);
        } catch (error) {
            return [];
        }
    }

    return (
        <SafeAreaView>
            <View style={{marginTop: 10}}>
                <Component.OnChangeSearch 
                    state={{ value: toSearch, action: setToSearch }}
                    updateUsers={setUsers}
                    updateTotal={setTotal}
                    isAllowed={{state: firstRender, change: setFirstRender}}
                />
                <View style={styles.countContainer}>
                    <Text style={styles.text}>{str.total + (!loader ? total : '-')}</Text>
                </View>
            </View>
            {!loader && (users.length !== 0  ? (
                <FlatList 
                    data={users}
                    renderItem={renderCard}
                    keyExtractor={({id}) => `user-${id}`}
                    onEndReached={moreData}
                    onEndReachedThreshold={0.1}
                />
            ) : (
                    <SafeAreaView style={styles.noUsers}>
                        <Text style={styles.noUsers.text}>{str.noUsers}</Text>
                    </SafeAreaView>
            ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    countContainer: {
        width: "90%",
        alignSelf: "center",
        alignItems: "flex-end",
        marginBottom: 10,
    },
    text: {
        backgroundColor: 'rgb(07,25,51)',
        width: "40%",
        padding: 5,
        textAlign: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontSize: 16,
        fontWeight: '600',
        color: "white",
    },
    noUsers: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        text: {
            color: 'gray',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 150
        }
    }
})

export default Search;