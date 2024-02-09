import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebView = ({ navigation, route }) => {
  const handlePress = () => navigation.goBack()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.return} onPress={handlePress}>
        <Text style={styles.return.text}>Return</Text>
      </TouchableOpacity>
      <WebView
        source={{ uri: route.params.url }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  return: {
    padding: 10,
    text: {
      color: "white",
      fontWeight: "500",
      // textAlign: "center"
      fontSize: 18
    }
  }
});

export default MyWebView;
