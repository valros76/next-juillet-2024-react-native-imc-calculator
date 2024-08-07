import { StyleSheet, Text, View } from "react-native";


export default function Card({props, children}){

  const {title, borderColor} = props;
  
  return(
    <View style={{
      ...styles.view,
      borderColor: borderColor ?? "transparent"
    }}>
      <Text style={styles.title}>
        {title}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width:350,
    backgroundColor:"#FFFFFF",
    borderWidth:4,
    borderColor:"transparent",
    gap:4,
    borderRadius:12,
    padding: 16,
    marginHorizontal: "auto",
  },
  title: {
    fontSize:24,
    fontWeight:"bold",
    letterSpacing: .15,
    fontFamily: "Titillium Web Bold",
  }
});