import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { getSavedHistory } from "@/shared/AsyncFunctions";
import { useEffect, useState } from "react";
import { Card } from "@/components/globals";

export default function HistoryScreen(){

  const [datas, setDatas] = useState([]);

  const debug = async (value:any = undefined) => {
    if(value){
      console.table(value);
    }
    const history = await getSavedHistory();
    console.table(history);
  }

  const initDatas = async () => {
    const datas = await getSavedHistory();
    setDatas(datas);
  }

  useEffect(() => {
    debug();
    initDatas();
  }, []);

  return(
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>
        {datas.length > 0 ? (
          <FlatList
          data={datas}
          renderItem={(item:any) => (<Card props={{
            title:item.firstname
          }}>
            <Text>{item.date}</Text>
            <Text>IMC : {item.imc} - {item.imcHint}</Text>
            <Text>Taille : {item.size} {item.sizeUnit}</Text>
            <Text>Poids : {item.weight} {item.weightUnit}</Text>
          </Card>)}
          keyExtractor={(item: any) => item.timestamp}
        />
        ) : (
          <ActivityIndicator
            size="large"
            color="#E59560"
          />
        )}
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