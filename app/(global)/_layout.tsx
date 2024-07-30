import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

export default function GlobalLayout() {
  
  const [loaded, error] = useFonts({
    "Titillium Web Light": require("@/assets/fonts/TitilliumWeb-Light.ttf"),
  });

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
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
          href: null,
        }}
      />
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
          tabBarLabel: () => (<Text>Dashboard</Text>),
          tabBarIcon: () => (<TabBarIcon name="stats-chart-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
          href: null
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profil",
          tabBarLabel: () => (<Text>Profil</Text>),
          tabBarIcon: () => (<TabBarIcon name="person-circle-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
        }}
      />
      <Tabs.Screen
        name="imc-calculator/index"
        options={{
          title: "Calculer mon IMC",
          tabBarLabel: () => (<Text>Mon IMC</Text>),
          tabBarIcon: () => (<TabBarIcon name="add-circle-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "À propos",
          tabBarLabel: () => (<Text>À propos</Text>),
          tabBarIcon: () => (<TabBarIcon name="settings-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          title: "Mon suivi",
          tabBarLabel: () => (<Text>Mon suivi</Text>),
          tabBarIcon: () => (<TabBarIcon name="time-outline" size={14}/>),
          tabBarItemStyle: [styles.tabBarItemCustom, {
            backgroundColor:"#fff"
          }],
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          },
          tabBarLabelStyle:{
            fontFamily: "Titillium Web Light"
          },
          href: null
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