import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
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

  const setCardBorderColor = (imc: number) => {
    switch(true){
      case (imc > 40):
        return "#1D3124";
      case (imc <= 18.5):
      case (imc <= 40 && imc > 35):
        return "#ED1C24";
      case (imc <= 35 && imc > 30):
        return "#E59560";
      case (imc <= 30 && imc > 25):
        return "#BACEC1";
      case (imc <= 25 && imc > 18.5):
      default:
        return "#00A511";
    }
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
            title:data.item.firstname,
            borderColor: setCardBorderColor(Number(data.item.imc))
          }}>
            <Text>{data.item.date}</Text>
            <Text>IMC : {data.item.imc} - {data.item.imcHint}</Text>
            <Text>Taille : {data.item.size} {data.item.sizeUnit}</Text>
            <Text>Poids : {data.item.weight} {data.item.weightUnit}</Text>
          </Card>)}
          keyExtractor={(item: any) => item.timestamp}
          ItemSeparatorComponent={() => (<View style={{
            width:"100%",
            height:24,
          }}></View>)}
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
    paddingVertical:42,
    paddingHorizontal:20,
  },
});