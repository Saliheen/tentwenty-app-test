import Routes from "./src/navigation/Routes";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Poppins_Light: require("./assets/fonts/Poppins-Light.ttf"),
    Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes />
    </>
  );
}
