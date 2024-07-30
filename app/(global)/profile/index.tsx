import { StyleSheet, View } from "react-native";


export default function ProfileScreen(){
  return(
    <View style={styles.view}>
      <View
        style={styles.userInfosView}
      >

      </View>

      <View style={styles.modifyUserView}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    gap:84,
    backgroundColor:"#F6F4E8",
  },
  userInfosView: {
    gap:24,
  },
  modifyUserView: {
    gap:8,
  }
});