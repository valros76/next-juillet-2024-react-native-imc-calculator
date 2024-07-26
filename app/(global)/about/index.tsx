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
    justifyContent: "center",
    alignItems: "flex-start"
  }
});