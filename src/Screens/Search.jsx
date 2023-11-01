import { useContext } from "react";
import Context from "../Context/Context";
import { StyleSheet, Text } from "react-native";
import localized from "../Strings";

function Search({navigation, route}) {
    const { loader } = useContext(Context);
    const { users, total } = route.params;
    // const str = localized[route.name];

    console.log(total)

    return !loader && (
        <>
            <Text>SEARCH</Text>
        </>
    )
}

const styles = StyleSheet.create({
})

export default Search;