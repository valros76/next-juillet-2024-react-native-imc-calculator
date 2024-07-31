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
import { saveImcResultToHistory } from "@/shared/AsyncFunctions";
import { useImcCalculatorContext } from "@/shared/contexts/ImcCalculatorProvider";

export default function ImcCalculatorScreen() {

  const {findHistory} = useImcCalculatorContext();

  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState(0);
  const [result, setResult] = useState("");

  const [loaded, error] = useFonts({
    "Titillium Web Light": require("@/assets/fonts/TitilliumWeb-Light.ttf"),
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  const handleCalculateIMC = async (size: number, weight: number) => {
    /**
     * Formule de calcul de l'IMC :
     * IMC = ((poids * 10000) / (taille * taille))
     */

    if(size <= 0){
      setResult(`Division par zéro impossible`);
      setSize("");
      setImc(0);
      return;
    }

    let imc = (Number(weight) * 10000) / (Number(size) * Number(size));
    imc = Number(imc.toFixed(1));
    setImc(imc);
    const imcHint = await determineResultHint(Number(imc));
    setSize("");
    setWeight("");

    await saveImcResultToHistory(
      Number(size), 
      Number(weight), 
      Number(imc.toFixed(1)),
      imcHint
    );
    findHistory();
  }

  const determineResultHint = async (imc: number) => {
    let imcHint = "";
    switch(true){
      case (imc <= 18.5):
        imcHint = `Maigreur, consultez un nutritionniste`;
        setResult(imcHint);
        return imcHint;
      case (imc <= 25 && imc > 18.5):
        imcHint = `Poids normal`;
        setResult(imcHint);
        return imcHint;
      case (imc <= 30 && imc > 25):
        imcHint = `Surpoids`;
        setResult(imcHint);
        return imcHint;
      case (imc <= 35 && imc > 30):
        imcHint = `Obésité modérée`;
        setResult(imcHint);
        return imcHint;
      case (imc <= 40 && imc > 35):
        imcHint = `Obésité sévère, consultez un nutritionniste`;
        setResult(imcHint);
        return imcHint;
      case (imc > 40):
        imcHint = `Obésité morbide, consultez un nutritionniste rapidement`;
        setResult(imcHint);
        return imcHint;
      default:
        imcHint = `Les valeurs fournies sont incorrectes`;
        setResult(imcHint);
        return imcHint;
    }
  }

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
                },
                actionOnPress: () => handleCalculateIMC(Number(size), Number(weight)),
                /**
                 * Autre notation possible :
                 * disabled: (weight.length <= 0) || (size.length <= 0)
                 */
                disabled: ((size.length && weight.length) <= 0)
              }}
            />
          </View>

          <View
            style={styles.calculateIMCResultView}
          >
            <WelcomeText
              props={{
                text: imc > 0 ? imc.toFixed(1) : imc,
                fontFamilyBold: true,
                addStyles: {
                  fontSize:36,
                  letterSpacing:.63,
                  lineHeight:48,
                  padding:0,
                }
              }}
            />
            <WelcomeText
              props={{
                text: result.length > 0 ? result : "En attente des informations",
                fontFamilyLight: true,
                addStyles:{
                  padding:0,
                }
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
