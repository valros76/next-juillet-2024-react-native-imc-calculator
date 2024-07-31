import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { getSavedHistory } from "@/shared/AsyncFunctions";
import { useEffect, useState } from "react";
import { Card } from "@/components/globals";

export default function HistoryScreen(){

  const [datas, setDatas] = useState([]);

  const debug = (value:any = undefined) => {
    if(value){
      console.table(value);
    }
  }

  const initDatas = async () => {
    const datas = await getSavedHistory();
    setDatas(datas);
  }

  useEffect(() => {
    initDatas();
  }, []);

  return(
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>
        {datas.length > 0 ? (
          <FlatList
          data={datas}
          renderItem={(data:any) => (<Card props={{
            title:data.item.firstname
          }}>
            <Text>{data.item.date}</Text>
            <Text>IMC : {data.item.imc} - {data.item.imcHint}</Text>
            <Text>Taille : {data.item.size} {data.item.sizeUnit}</Text>
            <Text>Poids : {data.item.weight} {data.item.weightUnit}</Text>
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