import {  StyleSheet, Text, View } from "react-native";

export default function WelcomeText({ props }){
  return(
    <View style={styles.view}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "max-content",
    maxWidth: "100%",
    backgroundColor: "#333",
    color:"#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: "auto",
    borderRadius: 256,
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});