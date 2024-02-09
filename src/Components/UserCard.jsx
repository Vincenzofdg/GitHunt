import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

function UserCard({info, nav}) {
    const handlePress = () => nav.navigate('User', { name: info.login });

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image source={{uri: info.avatar_url}} style={styles.picture} />
            <View style={styles.basics}>
                <Text style={styles.title}>{info.login}</Text>
                <Text style={styles.text}>Type: {info.type}</Text>
                <Text style={styles.text}>System Admin: {!info.site_admin ? 'No' : 'Yes'}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        marginBottom: 20,
        alignSelf: 'center',
        flexDirection: "row",
        
    },
    picture: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 125,
        height: 125,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    basics: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flexGrow: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: "center",
        padding: 5,
        color: "white"
    },
    text: {
        fontWeight: '600',
        color: "white",
    }
})

export default UserCard;
