import {  StyleSheet, Text, View } from "react-native";

export default function WelcomeText({ props }){
  const {darkMode, fontFamilyLight, fontFamilyBold, addStyles} = props;

  return(
    <View style={{
      ...styles.view,
      backgroundColor: darkMode && "#1D3124",
      color: darkMode && "#FFFFFF"
    }}>
      <Text style={{
        ...styles.text,
        color: darkMode && "#FFFFFF",
        fontFamily: ((darkMode || fontFamilyBold) && "Titillium Web Bold") || (fontFamilyLight && "Titillium Web Light"),
        ...addStyles
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