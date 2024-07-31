import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { getSavedHistory } from "@/shared/AsyncFunctions";
import { useEffect } from "react";

export default function HistoryScreen(){

  const debug = async () => {
    const history = await getSavedHistory();
    console.table(history);
  }

  useEffect(() => {
    debug();
  }, []);

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