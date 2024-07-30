import {  StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function WelcomeText({ props }){
  const {darkMode} = props;

  const [loaded, error] = useFonts({
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  return(
    <View style={{
      ...styles.view,
      backgroundColor: darkMode && "#1D3124",
      color: darkMode && "#FFFFFF"
    }}>
      <Text style={{
        ...styles.text,
        color: darkMode && "#FFFFFF",
        fontFamily: darkMode && "Titillium Web Bold",
      }}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "auto",
    maxWidth: "100%",
    backgroundColor: "transparent",
    color:"#1D3124",
    paddingVertical:8,
    paddingHorizontal: 12,
    marginHorizontal: "auto",
    borderRadius: 256,
  },
  text: {
    fontSize: 16,
    color: "#1D3124",
    fontFamily: "Titillium Web Regular",
  },
});