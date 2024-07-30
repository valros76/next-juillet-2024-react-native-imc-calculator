import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import {getSavedFirstname, modifyFirstname} from "@/shared/AsyncFunctions";
import { CtaButton, WelcomeText } from "@/components/globals";

export default function ProfileScreen() {

  /**
   * TODO : Régler le problème de l'avatar qui ne charge pas sur mobile !
   */

  const [firstname, setFirstname] = useState("");
  const [newFirstname, setNewFirstname] = useState("");

  useEffect(() => {
    getSavedFirstname()
    .then(data => {
      if(!data){
        return;
      }
      setFirstname(data);
    });

    return () => {
      setFirstname("");
    }
  }, []);

  const handleModifyFirstname = async () => {
    if(newFirstname.length <= 0){
      return;
    }

    setNewFirstname(() => newFirstname.toLowerCase().trim());
    setNewFirstname(() => newFirstname.replaceAll(" ", ""));
    setNewFirstname(() => newFirstname.slice(0,1).toUpperCase() + newFirstname.slice(1, newFirstname.length));

    await modifyFirstname(newFirstname).then(data => {
      if(!data){
        return;
      }
      setNewFirstname("");
    });

    await getSavedFirstname().then(data => {
      if(!data){
        return;
      }
      setFirstname(data);
    });
  }


  return (
    <View style={styles.view}>
      <View style={styles.userInfosView}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://api.dicebear.com/8.x/bottts/svg?seed=241",
          }}
        />

        <Text style={styles.firstname}>
          {firstname}
        </Text>
      </View>

      <View style={styles.modifyUserView}>
        <WelcomeText
          props={{
            text: "Un autre utilisateur ?"
          }}
        />
        <TextInput
          style={styles.firstnameInput}
          placeholder="Nouveau prénom"
          placeholderTextColor="#BACEC1"
          onChangeText={setNewFirstname}
          value={newFirstname}
        />
        <CtaButton
          props={{
            text: "Modifier",
            actionOnPress: () => handleModifyFirstname(),
            disabled: newFirstname.length <= 0
          }}
        />
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
    gap: 6,
  },
  modifyUserView: {
    gap: 8,
  },
  avatar:{
    width:128,
    height:128,
    borderRadius:128,
    marginHorizontal: "auto",
  },
  firstname: {
    fontSize:64,
    textAlign:"center",
  },
  firstnameInput: {
    width: 240,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#BACEC1",
  },
});
