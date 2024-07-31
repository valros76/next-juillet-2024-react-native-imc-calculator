import { Link, router } from "expo-router";
import { initFirstname } from "@/shared/AsyncFunctions";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  WelcomeText,
  CtaButton,
} from "@/components/globals";
import { useEffect, useState } from "react";
import { getSavedFirstname } from "@/shared/AsyncFunctions";
import { useFonts } from "expo-font";
import { useImcCalculatorContext } from "@/shared/contexts/ImcCalculatorProvider";

export default function HomeScreen() {

  const {firstname, findFirstname, verifyIfProfileExists} = useImcCalculatorContext();

  const [loading, setLoading] = useState(true);
  const [newFirstname, setNewFirstname] = useState("");

  const [loaded, error] = useFonts({
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf")
  });

  useEffect(() => {
    verifyIfProfileExists();
    if (!firstname) {
      setLoading(false);
    }
  }, [firstname]);

  const handleConfirmFirstname = async (name = "") => {
    if (name.length <= 0) {
      return;
    }

    name = name.trim();
    name = name.replace(" ", "");
    name = name.toLowerCase();
    name =
      name.slice(0, 1).toUpperCase() +
      name.slice(1, name.length);
    await initFirstname(name);
    setNewFirstname("");
    findFirstname();
    router.push("dashboard");
  };

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#E59560"
          />
        </View>
      ) : (
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
            value={newFirstname}
            onChangeText={setNewFirstname}
          />
          <CtaButton
            props={{
              text: "Commencer",
              actionOnPress: () => handleConfirmFirstname(newFirstname),
              disabled: newFirstname.length <= 0,
            }}
          />
        </View>
      )}
    </>
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
    fontFamily: "Titillium Web Regular",
  },
});
