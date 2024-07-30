import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function AboutScreen(){
  return(
    <View style={styles.container}>
      <Text>
        Écran à propos
      </Text>
      <Link href="/">Retour à l'accueil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap:24,
    backgroundColor: "#F6F4E8",
    paddingVertical:36,
  }
});