import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  getSavedFirstname,
  modifyFirstname,
} from "@/shared/AsyncFunctions";
import {
  CtaButton,
  WelcomeText,
} from "@/components/globals";
import { useFonts } from "expo-font";

export default function ProfileScreen() {
  /**
   * TODO : Régler le problème de l'avatar qui ne charge pas sur mobile !
   */

  const [firstname, setFirstname] = useState("");
  const [newFirstname, setNewFirstname] = useState("");

  const [loaded, error] = useFonts({
    "Titillium Web Regular": require("@/assets/fonts/TitilliumWeb-Regular.ttf"),
    "Titillium Web Bold": require("@/assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  useEffect(() => {
    getSavedFirstname().then((data) => {
      if (!data) {
        return;
      }
      setFirstname(data);
    });

    return () => {
      setFirstname("");
    };
  }, []);

  const handleModifyFirstname = async () => {
    if (newFirstname.length <= 0) {
      return;
    }

    setNewFirstname(() =>
      newFirstname.toLowerCase().trim()
    );
    setNewFirstname(() => newFirstname.replaceAll(" ", ""));
    setNewFirstname(
      () =>
        newFirstname.slice(0, 1).toUpperCase() +
        newFirstname.slice(1, newFirstname.length)
    );

    await modifyFirstname(newFirstname).then((data) => {
      if (!data) {
        return;
      }
      setNewFirstname("");
    });

    await getSavedFirstname().then((data) => {
      if (!data) {
        return;
      }
      setFirstname(data);
    });
  };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.userInfosView}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://api.dicebear.com/8.x/bottts/svg?seed=241",
            }}
          />

          <Text style={styles.firstname}>{firstname}</Text>
        </View>

        <View style={styles.modifyUserView}>
          <WelcomeText
            props={{
              text: "Un autre utilisateur ?",
              fontFamilyLight: true,
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
              disabled: newFirstname.length <= 0,
              addStyles: styles.cta,
              addTextStyles: styles.ctaText,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F6F4E8",
  },
  scrollView: {
    width:"100%",
    gap: 84,
    paddingVertical: 24,
  },
  userInfosView: {
    width:"auto",
    justifyContent:"center",
    alignItems:"center",
    gap: 6,
    marginBottom: 84,
  },
  modifyUserView: {
    width:"auto",
    justifyContent:"center",
    alignItems:"center",
    gap: 8,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 128,
    marginHorizontal: "auto",
  },
  firstname: {
    fontSize: 64,
    textAlign: "center",
    fontFamily: "Titillium Web Bold",
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
    fontFamily: "Titillium Web Regular",
  },
  cta: {
    marginHorizontal: "auto",
  },
  ctaText: {
    fontSize: 16,
  },
});
