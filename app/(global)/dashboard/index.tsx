import { CtaButton } from "@/components/globals";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.menuButtonsContainer}>
        <CtaButton
          props={{
            text: "Calculer mon IMC",
            withIcon: true,
            iconType: "edit",
            actionOnPress: () =>
              router.push("imc-calculator"),
            borderRadius: 16,
            addTextStyles: styles.menuButtonText
          }}
        />
        <CtaButton
          props={{
            text: "Mon suivi",
            withIcon: true,
            iconType: "history",
            actionOnPress: () => router.push("history"),
            borderRadius: 16,
            addTextStyles: styles.menuButtonText
          }}
        />
        <CtaButton
          props={{
            text: "Mon profil",
            withIcon: true,
            iconType: "profile",
            actionOnPress: () => router.push("profile"),
            borderRadius: 16,
            addTextStyles: styles.menuButtonText
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F4E8",
  },
  menuButtonsContainer:{
    width:"auto",
    gap: 42,
  },
  menuButtonText: {
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    gap:12,
    fontSize: 20,
  }
});
