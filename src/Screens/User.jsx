import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView, Image, View, SafeAreaView } from "react-native";
import Service from '../Services';
import images from '../assets';

function User({navigation, route}) {
    const [info, setInfo] = useState({});
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const { name } = route.params

            const promises = [
                Service.User(name),
                Service.Repo(name)
            ];

            const [basicInfo, repos] = await Promise.all(promises);

            setInfo({
                ...basicInfo,
                repoQtd: repos.length,
            })

            setRepo(repos);
        }
        FetchData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <TouchableOpacity style={styles.return} onPress={() => navigation.goBack()}>
                    <Image source={images.Arrow} style={styles.return.icon} />
                    <Text style={[styles.title, { color: "white" }]}>Return</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Image 
                        source={!!info.foto ? {uri: info.foto} : images.Placeholder} 
                        style={styles.foto}
                    />
                    <View style={styles.headerContent}>
                        <View style={{ width: "100%" }}>
                            {info.name && <Text style={[styles.title, {textAlign: "center"}]}>{info.name}</Text>}
                            <Text style={[styles.title, {textAlign: "right", fontSize: 12}]}>{info.username}</Text>
                        </View>
                        <View style={styles.generalStats}>
                            <View style={{ padding: 2 }}>
                                <Text style={[styles.title, { textAlign: "center" }]}>{info.followers}</Text>
                                <Text style={[styles.title, { fontSize: 14 }]}>Followers</Text>
                            </View>
                            <View style={ styles.bar } />
                            <View style={{ padding: 2 }}>
                                <Text style={[styles.title, { textAlign: "center" }]}>{info.following}</Text>
                                <Text style={[styles.title, {fontSize: 14}]}>Following</Text>
                            </View>
                            <View style={ styles.bar } />
                            <View style={{ padding: 2 }}>
                                <Text style={[styles.title, { textAlign: "center" }]}>{info.repoQtd}</Text>
                                <Text style={[styles.title, {fontSize: 14}]}>Projects</Text>
                            </View>
                        </View>
                    </View>
                </View>




                <View style={styles.publicRepo}>
                    <Text style={{color: "white", fontWeight: "600"}}>Public Repositories:</Text>
                    {
                        repo.map((project, i)  => {
                            const { name, description, html_url, language, forks_count, watchers, created_at, updated_at } = project;

                            // exclude github readme
                            if (name.toLowerCase() === info.username.toLowerCase() ) return

                            const newCreated = new Date(created_at);
                            const newUpdated = new Date(updated_at);

                            const created = newCreated.toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit'
                            });

                            const updated = newUpdated.toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit'
                            });
       
                            return (
                                <TouchableOpacity key={name + "-" + i} style={styles.cardRepo} onPress={() => navigation.navigate('WebRepo', { url: html_url })}>
                                    <Text style={[styles.cardRepo.text, {position: "absolute", padding: 10, right: 0, color: "#89CFF0"}]}>{language}</Text>
                                    <Text style={styles.cardRepo.text}>{name}</Text>
                                    {!!description && <Text style={[styles.cardRepo.text, {padding: 15, fontWeight: "400", textAlign: "justify"}]}>{description}</Text>}
                                    
                                    <Text style={[styles.cardRepo.text, { paddingLeft: 15, marginTop: 5 }]}>{`Created: ${created} - ${(created_at.split("T"))[1].slice(0, -1)}`}</Text>
                                    <Text style={[styles.cardRepo.text, { paddingLeft: 15, marginTop: 5 }]}>{`Updated: ${updated} - ${(updated_at.split("T"))[1].slice(0, -1)}`}</Text>

                                    <Text style={[styles.cardRepo.text, { paddingLeft: 15, marginTop: 12, textAlign: "right" }]}>{`Forkes: ${forks_count}`}</Text>
                                    <Text style={[styles.cardRepo.text, { paddingLeft: 15, marginTop: 5, textAlign: "right"  }]}>{`Watchers: ${watchers}`}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    return: {
        backgroundColor: 'rgb(07,25,51)',
        width: "30%",
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        borderRadius: 50,
        marginLeft: 15,
        icon: {
            width: 25,
            height: 25,
            marginRight: 10,
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
        justifyContent: "center",
        alignItems: "center",
    },
    generalStats: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    bar: {
        width: 1.5,
        height: 20,
        backgroundColor: "black",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    publicRepo: {
        backgroundColor: 'rgb(07,25,51)',
        marginTop: 40,
        padding: 20,
        borderRadius: 10
    },
    cardRepo: {
        backgroundColor: "#36454F",
        marginTop: 20,
        padding: 15,
        borderRadius: 15,
        text: {
            fontWeight: "600",
            color: "#D3D3D3",
        }
    }
})

export default User;
