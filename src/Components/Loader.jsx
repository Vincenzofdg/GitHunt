import AnimatedLoader from "react-native-animated-loader";
import Asset from "../assets";

function Loader() {
  return (
    <AnimatedLoader
        visible={true}
        overlayColor="transparent"
        source={Asset.LoadAnimation}
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