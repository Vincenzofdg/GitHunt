import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView, Image, View } from "react-native";
import Service from '../Services';
import images from '../assets';

function User({navigation, route}) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const data = await Service.User(route.params.name);

            console.log(data)

            setInfo(data)
        }
        FetchData()
    }, [])

    return (
        <ScrollView style={{flex: 1}}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.goBack()}>
                <Image source={images.Arrow} style={styles.return.icon} />
                <Text style={styles.title}>Return</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                
                <Image 
                    source={!!info.foto ? {uri: info.foto} : images.Placeholder} 
                    style={styles.foto}
                />

                <View style={styles.headerContent}>

                    <View>
                        {info.name && <Text style={[styles.title, {textAlign: "center"}]}>{info.name}</Text>}
                        <Text style={[styles.title, {textAlign: "right", fontSize: 12}]}>{info.username}</Text>
                    </View>

                    <View style={styles.generalStats}>
                        <View style={{padding: 2, backgroundColor: 'red'}}>
                            <Text style={[styles.title]}>{info.followers}</Text>
                            <Text style={[styles.title, {fontSize: 14}]}>Followers</Text>
                        </View>
                        <View style={{padding: 2, backgroundColor: 'red'}}>
                            <Text style={styles.title}>{info.following}</Text>
                            <Text style={[styles.title, {fontSize: 14}]}>Following</Text>
                        </View>
                        {/* <Text style={[styles.title]}>{info.following}</Text> */}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    return: {
        backgroundColor: 'rgb(07,25,51)',
        flexDirection: 'row',
        alignItems: "center",
        padding: 5,
        icon: {
            width: 35,
            height: 35,
            marginRight: 30,
            marginLeft: 5,
        }
    },
    title: {
        fontSize: 18,
        fontWeight: '400'
    },
    header: {
        marginTop: 20,
        width: "96%",
        alignSelf: "center",
        flexDirection: "row"
    },
    foto: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    headerContent: {
        flex: 1,
        padding: 8,
        justifyContent: "space-between"
    },
    generalStats: {
        backgroundColor: 'green',
        flexDirection: "row"
    }
})

export default User;

// ["login", "id", "node_id", "avatar_url", 
// "gravatar_id", "url", "html_url", "followers_url", 
// "following_url", "gists_url", "starred_url", 
// "subscriptions_url", "organizations_url", 
// "repos_url", "events_url", "received_events_url", 
// "type", "site_admin", "name", 
// "company", "blog", "location", "email", 
// "hireable", "bio", "twitter_username", "public_repos", 
// "public_gists", "followers", "following", "created_at", "updated_at"]