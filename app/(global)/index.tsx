import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { WelcomeText } from "@/components/globals";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.homeImg}
        source={{
          uri: "https://images.unsplash.com/photo-1559724087-a45f6a7a35d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
        }}
      />
      <WelcomeText
        props={{
          text: "Calculateur d'IMC"
        }}
      />
      <Link href="/about">À propos</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: 256,
    height: 256,
    borderRadius: 64,
    marginHorizontal: "auto",
  }
});
