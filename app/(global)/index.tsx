import { Link } from "expo-router";
import {initFirstname} from "@/shared/AsyncFunctions";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  WelcomeText,
  CtaButton,
} from "@/components/globals";
import { useState } from "react";

export default function HomeScreen() {
  const [firstname, setFirstname] = useState("");

  const handleConfirmFirstname = async (name = "") => {
    if(name.length <= 0){
      return;
    }

    name = name.trim();
    name = name.replace(" ", "");
    name = name.toLowerCase();
    name = name.slice(0,1).toUpperCase()+name.slice(1, name.length);

    await initFirstname(name);
  }

  return (
    <View style={styles.container}>
      <WelcomeText
        props={{
          text: "Bonjour.",
        }}
      />
      <WelcomeText
        props={{
          text: "Quel est votre prénom ?",
        }}
      />
      <TextInput
        style={styles.firstnameInput}
        placeholder="Votre prénom"
        placeholderTextColor="#BACEC1"
        value={firstname}
        onChangeText={setFirstname}
      />
      <CtaButton
        props={{
          text: "Commencer",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F4E8",
  },
  firstnameInput: {
    width: 240,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#BACEC1",
  },
});
