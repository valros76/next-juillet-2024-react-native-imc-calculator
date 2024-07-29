import { SafeAreaView, ScrollView, StyleSheet } from "react-native";


export default function HistoryScreen(){
  return(
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"stretch",
    gap:0,
    backgroundColor:"#F6F4E8",
  },
  scrollView: {
    backgroundColor:"transparent",
  }
});