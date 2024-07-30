import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

export default function ImcCalculatorScreen(){
  
  const [loaded, error] = useFonts({
    "Titillium Web Light": require("@/assets/fonts/TitilliumWeb-Light.ttf"),
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });
  
  return(
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentView}>
          <View style={styles.calculateIMCFormView}>

          </View>

          <View style={styles.calculateIMCResultView}>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor:"#F6F4E8",
  },
  scrollView: {
    width: "100%",
  },
  contentView: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:48,
    padding:20,
  },
  calculateIMCFormView: {
    justifyContent: "flex-start",
    alignItems:"stretch",
    gap:24,
    padding:0,
  },
  calculateIMCResultView: {
    justifyContent:"center",
    alignItems:"center",
    gap:12,
  }
});