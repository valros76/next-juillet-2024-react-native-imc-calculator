import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { CtaButton, WelcomeText } from "@/components/globals";

export default function ImcCalculatorScreen() {
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState(0);

  const [loaded, error] = useFonts({
    "Titillium Web Light": require("@/assets/fonts/TitilliumWeb-Light.ttf"),
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentView}>
          <View style={styles.calculateIMCFormView}>
            <TextInput
              placeholder="Votre taille en cm"
              placeholderTextColor="#79797A"
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={setSize}
              value={size}
              style={styles.textInputs}
            />

            <TextInput
              placeholder="Votre poids en kg"
              placeholderTextColor="#79797A"
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={setWeight}
              value={weight}
              style={styles.textInputs}
            />

            <CtaButton
              props={{
                text:"Calculer mon IMC",
                borderRadius:100,
                addStyles: {
                  width:"auto",
                  marginHorizontal:"auto",
                  marginVertical:0,
                  paddingVertical: 10,
                  paddingHorizontal: 24,
                },
                addTextStyles: {
                  fontSize: 16,
                  fontWeight: "bold",
                  letterSpacing: .1,
                }
              }}
            />
          </View>

          <View
            style={styles.calculateIMCResultView}
          >
            <WelcomeText
              props={{
                text: imc,
              }}
            />
            <WelcomeText
              props={{
                text: "En attente des informations",
                fontFamilyLight: true,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#F6F4E8",
  },
  scrollView: {
    width: "100%",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
    padding: 20,
  },
  calculateIMCFormView: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 24,
    padding: 0,
  },
  calculateIMCResultView: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  textInputs: {
    width: 240,
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#ffffff",
    textAlign: "left",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#BACEC1",
    fontFamily: "Titillium Web Regular",
  },
});
