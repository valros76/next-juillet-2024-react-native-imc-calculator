import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {} from "@/shared/AsyncFunctions";

export default function ProfileScreen() {

  /**
   * TODO : Régler le problème de l'avatar qui ne charge pas sur mobile !
   */

  const [firstname, setFirstname] = useState("");


  return (
    <View style={styles.view}>
      <View style={styles.userInfosView}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://api.dicebear.com/8.x/bottts/svg?seed=241",
          }}
        />
      </View>

      <View style={styles.modifyUserView}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 84,
    backgroundColor: "#F6F4E8",
    paddingVertical:42,
  },
  userInfosView: {
    gap: 24,
  },
  modifyUserView: {
    gap: 8,
  },
  avatar:{
    width:128,
    height:128,
    borderRadius:128,
  }
});
