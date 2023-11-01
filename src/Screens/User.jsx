import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Service from '../Services';
import images from '../assets';

function User({navigation, route}) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const data = await Service.User(route.params.name);

            console.log(data.blog)

        }
        FetchData()
    }, [])

    return (
        <ScrollView style={{flex: 1}}>
            <TouchableOpacity style={styles.return} onPress={() => navigation.goBack()}>
                <Image source={images.Arrow} style={styles.return.icon} />
                <Text style={styles.title}>Return</Text>
            </TouchableOpacity>
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
    }
})

export default User;

// ["login", "id", "node_id", "avatar_url", "gravatar_id", "url", "html_url", "followers_url", "following_url", "gists_url", "starred_url", 
// "subscriptions_url", "organizations_url", "repos_url", "events_url", "received_events_url", "type", "site_admin", "name", 
// "company", "blog", "location", "email", "hireable", "bio", "twitter_username", "public_repos", "public_gists", "followers", "following", "created_at", "updated_at"]