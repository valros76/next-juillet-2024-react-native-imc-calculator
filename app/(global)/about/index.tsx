import { Link } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "@/components/globals";
import { useFonts } from "expo-font";

export default function AboutScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentView}>
        <Card
          props={{
            title: "Développeur",
          }}
        >
          <Text style={styles.customFont}>Dufrène Valérian</Text>
        </Card>
        <Card
          props={{
            title: "Entreprise",
          }}
        >
          <Text style={styles.customFont}>Webdevoo Formation</Text>
        </Card>
        <Card
          props={{
            title: "Type de projet",
          }}
        >
          <Text style={styles.customFont}>Open-source</Text>
        </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4E8",
  },
  scrollView:{
    width:"100%",
  },
  contentView: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
    paddingVertical: 36,
  },
  customFont: {
    fontFamily: "Titillium Web Regular",
  }
});
