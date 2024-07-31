import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getSavedHistory } from "@/shared/AsyncFunctions";
import { useEffect, useState } from "react";
import { Card, CtaButton } from "@/components/globals";
import { router } from "expo-router";
import {useImcCalculatorContext} from "@/shared/contexts/ImcCalculatorProvider";

export default function HistoryScreen() {

  const {history, setHistory, findHistory} = useImcCalculatorContext();

  const [loading, setLoading] = useState(true);

  const debug = (value: any = undefined) => {
    if (value) {
      console.table(value);
    }
  };

  const initDatas = async () => {
    const datas = await findHistory();
    setLoading(false);
  };

  const setCardBorderColor = (imc: number) => {
    switch (true) {
      case imc > 40:
        return "#1D3124";
      case imc <= 18.5:
      case imc <= 40 && imc > 35:
        return "#ED1C24";
      case imc <= 35 && imc > 30:
        return "#E59560";
      case imc <= 30 && imc > 25:
        return "#BACEC1";
      case imc <= 25 && imc > 18.5:
      default:
        return "#00A511";
    }
  };

  useEffect(() => {
    if(loading){
      initDatas();
    }
  }, []);

  return (
    <SafeAreaView style={styles.view}>
        {history.length > 0 && !loading ? (
          <FlatList
            data={history.sort((a: any, b:any) => {
              const elementA = Number(a.timestamp);
              const elementB = Number(b.timestamp);

              // Tri par ordre décroissant
              // Pour inverser l'ordre de tri, il suffit de modifier les retours des deux conditions suivantes (-1 / 1).
              if(elementA < elementB){
                return 1;
              }
              if(elementA > elementB){
                return -1;
              }
              return 0;
              // Fin du tri par ordre décroissant
            })}
            renderItem={(data: any) => (
              <Card
                props={{
                  title: data.item.firstname,
                  borderColor: setCardBorderColor(
                    Number(data.item.imc)
                  ),
                }}
              >
                <Text>{data.item.date}</Text>
                <Text>
                  IMC : {data.item.imc} -{" "}
                  {data.item.imcHint}
                </Text>
                <Text>
                  Taille : {data.item.size}{" "}
                  {data.item.sizeUnit}
                </Text>
                <Text>
                  Poids : {data.item.weight}{" "}
                  {data.item.weightUnit}
                </Text>
              </Card>
            )}
            keyExtractor={(item: any) => item.timestamp}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: "100%",
                  height: 24,
                }}
              ></View>
            )}
          />
        ) : (
          <>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#E59560"
              />
            ) : (
              <Card
                props={{
                  title: "Aucunes données"
                }}
              >
                <Text>Vous n'avez jamais calculé votre IMC.</Text>
                <CtaButton
                  props={{
                    text:"Calculer mon IMC",
                    actionOnPress: () => router.push("imc-calculator"),
                    addStyles:{
                      marginLeft: "auto",
                      marginTop:24,
                      padding:6,
                    }
                  }}
                />
              </Card>
            )}
          </>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 0,
    backgroundColor: "#F6F4E8",
    paddingVertical: 42,
    paddingHorizontal: 20,
  },
});
