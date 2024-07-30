import { Text, View } from "react-native";


export default function Card({title, children}){
  return(
    <View style={styles.view}>
      <Text style={styles.title}>
        {title}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width:"100%",
    padding: 16,
  },
  title: {
    fontSize:24,
    fontWeight:"bold",
    letterSpacing: .15,
  }
});