import AnimatedLoader from "react-native-animated-loader";
import File from "../assets/Loader.json";

function Loader() {
  return (
    <AnimatedLoader
        visible={true}
        overlayColor="transparent"
        source={File}
        animationStyle={{
            width: 200,
            height: 200
        }}
        speed={1}>
    </AnimatedLoader>
  );
}

export default Loader;

// https://www.npmjs.com/package/react-native-animated-loader
// https://lottiefiles.com/search?q=loader