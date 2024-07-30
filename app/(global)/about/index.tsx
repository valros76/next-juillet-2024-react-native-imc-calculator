import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "@/components/globals";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Card
        props={{
          title: "Développeur",
        }}
      >
        <Text>Dufrène Valérian</Text>
      </Card>
      <Link href="/">Retour à l'accueil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#F6F4E8",
    paddingVertical: 36,
  },
});
