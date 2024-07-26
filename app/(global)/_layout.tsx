import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function GlobalLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarLabel: () => (<Text>
            Accueil
          </Text>),
          tabBarIcon: () => (<TabBarIcon name="home-outline" size={14}/>),
          tabBarItemStyle: {
            ...styles.tabBarItemCustom,
            backgroundColor:"#fff",
          },
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          }
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "À propos",
          tabBarLabel: () => (<Text>Plus d'infos</Text>),
          tabBarIcon: () => (<TabBarIcon name="help-circle-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          }
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarItemCustom: {
    flex:1,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  tabBarIconCustom: {
    height:18,
  }
});