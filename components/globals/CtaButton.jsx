import { Pressable, StyleSheet, Text } from "react-native";


export default function CtaButton({ props }){

  const {text, borderRadius, withIcon, iconType, actionOnPress} = props;

  return(
    <Pressable
      style={{
        ...styles.customButton,
        borderRadius: borderRadius ?? 8,
      }}
      onPress={() => actionOnPress}
    >
      <Text style={styles.customButtonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customButton: {
    width: "auto",
    backgroundColor: "#E59560",
    padding: 12,
  },
  customButtonText: {
    fontFamily: "TitilliumWeb-Bold.ttf",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
  }
});